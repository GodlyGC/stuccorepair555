"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
// Removed Alert and AlertDescription as submission feedback is now handled by a modal
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  User,
  FileText,
  Shield,
  X,
  Camera,
  ChevronRight,
} from "lucide-react"
import type { FormData } from "@/lib/emailjs-service"

interface FileWithPreview {
  file: File
  preview: string
  id: string
  error?: string
}

interface SubmissionResult {
  success: boolean
  message: string
}

export default function EnhancedContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const closeUpInputRef = useRef<HTMLInputElement>(null)
  const farAwayInputRef = useRef<HTMLInputElement>(null)

  // Form step state
  const [currentStep, setCurrentStep] = useState(1)
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectInfo: "",
    closeUpFile: null,
    farAwayFile: null,
    privacyConsent: false,
    termsConsent: false,
  })

  const [closeUpFiles, setCloseUpFiles] = useState<FileWithPreview[]>([])
  const [farAwayFiles, setFarAwayFiles] = useState<FileWithPreview[]>([])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<SubmissionResult | null>(null)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showTermsOfService, setShowTermsOfService] = useState(false)

  const MAX_FILE_SIZE = 4 * 1024 * 1024 // 4MB per file
  const MAX_TOTAL_SIZE = 20 * 1024 * 1024 // 20MB total
  const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"]
  const MAX_FILES_PER_CATEGORY = 3

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (submitResult) {
      setSubmitResult(null)
    }
  }, [submitResult])

  const handleCheckboxChange = (name: "privacyConsent" | "termsConsent", checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const validateFile = useCallback((file: File): { isValid: boolean; error?: string } => {
    if (file.size > MAX_FILE_SIZE) {
      return { isValid: false, error: `File exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit` }
    }
    if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
      return { isValid: false, error: `Invalid file type` }
    }
    return { isValid: true }
  }, [])

  const getTotalFileSize = useCallback(() => {
    const allFiles = [...closeUpFiles, ...farAwayFiles]
    return allFiles.reduce((total, fileData) => total + fileData.file.size, 0)
  }, [closeUpFiles, farAwayFiles])

  const createFilePreview = useCallback(
    async (file: File): Promise<FileWithPreview> => {
      const id = `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      const validation = validateFile(file)
      let preview = ""
      try {
        preview = URL.createObjectURL(file)
      } catch (error) {
        console.error("Failed to create preview URL", error)
        preview = "/placeholder.svg?height=200&width=200"
      }

      return {
        file,
        preview,
        id,
        error: validation.isValid ? undefined : validation.error,
      }
    },
    [validateFile],
  )

  const handleFileSelect = useCallback(
    async (files: FileList | null, category: "closeUp" | "farAway") => {
      if (!files || files.length === 0) return

      const currentFiles = category === "closeUp" ? closeUpFiles : farAwayFiles
      const setFiles = category === "closeUp" ? setCloseUpFiles : setFarAwayFiles

      const availableSlots = MAX_FILES_PER_CATEGORY - currentFiles.length
      if (availableSlots <= 0) return

      const filesToProcess = Array.from(files).slice(0, availableSlots)
      
      // Check total size limit
      const currentTotalSize = getTotalFileSize()
      const newFilesSize = filesToProcess.reduce((total, file) => total + file.size, 0)
      
      if (currentTotalSize + newFilesSize > MAX_TOTAL_SIZE) {
        setSubmitResult({
          success: false,
          message: `Total file size would exceed ${MAX_TOTAL_SIZE / (1024 * 1024)}MB limit. Please select smaller files.`
        })
        return
      }

      const newFiles = await Promise.all(filesToProcess.map(createFilePreview))

      const updatedFiles = [...currentFiles, ...newFiles]
      setFiles(updatedFiles)

      const firstValidFile = updatedFiles.find((f) => !f.error)?.file || null
      setFormData((prev) => ({
        ...prev,
        [category === "closeUp" ? "closeUpFile" : "farAwayFile"]: firstValidFile,
      }))
    },
    [closeUpFiles, farAwayFiles, createFilePreview, getTotalFileSize],
  )

  const removeFile = useCallback(
    (id: string, category: "closeUp" | "farAway") => {
      const currentFiles = category === "closeUp" ? closeUpFiles : farAwayFiles
      const setFiles = category === "closeUp" ? setCloseUpFiles : setFarAwayFiles

      const fileToRemove = currentFiles.find((f) => f.id === id)
      if (fileToRemove && fileToRemove.preview.startsWith("blob:")) {
        URL.revokeObjectURL(fileToRemove.preview)
      }

      const updatedFiles = currentFiles.filter((f) => f.id !== id)
      setFiles(updatedFiles)

      const firstValidFile = updatedFiles.find((f) => !f.error)?.file || null
      setFormData((prev) => ({
        ...prev,
        [category === "closeUp" ? "closeUpFile" : "farAwayFile"]: firstValidFile,
      }))
    },
    [closeUpFiles, farAwayFiles],
  )

  const formatPhoneNumber = useCallback((value: string) => {
    const phoneNumber = value.replace(/\D/g, "")
    if (phoneNumber.length >= 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    } else if (phoneNumber.length >= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`
    } else if (phoneNumber.length >= 3) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return phoneNumber
  }, [])

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhoneNumber(e.target.value)
      setFormData((prev) => ({
        ...prev,
        phone: formatted,
      }))
    },
    [formatPhoneNumber],
  )

  const validateStep1 = useCallback((): { isValid: boolean; errors: string[] } => {
    const errors: string[] = []
    if (!formData.name.trim()) errors.push("Name is required")
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errors.push("A valid email is required")
    if (!formData.phone.trim() || !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-()]/g, "")))
      errors.push("A valid phone number is required")
    if (!formData.projectInfo.trim() || formData.projectInfo.trim().length < 20)
      errors.push("Detailed project info (min 20 chars) is required")

    return { isValid: errors.length === 0, errors }
  }, [formData])

  const validateStep2 = useCallback((): { isValid: boolean; errors: string[] } => {
    const errors: string[] = []
    if (closeUpFiles.filter((f) => !f.error).length === 0) errors.push("Close-up photo is required")
    if (farAwayFiles.filter((f) => !f.error).length === 0) errors.push("Wide view photo is required")
    if ([...closeUpFiles, ...farAwayFiles].some((f) => f.error)) errors.push("Please fix file errors")
    if (!formData.privacyConsent) errors.push("You must agree to the Privacy Policy")
    if (!formData.termsConsent) errors.push("You must agree to the Terms of Service")

    return { isValid: errors.length === 0, errors }
  }, [formData, closeUpFiles, farAwayFiles])

  const handleNextStep = () => {
    const validation = validateStep1()
    if (!validation.isValid) {
      setSubmitResult({ success: false, message: `Please fix: ${validation.errors.join(", ")}` })
      return
    }
    setSubmitResult(null)
    setCurrentStep(2)
  }

  const handlePrevStep = () => {
    setSubmitResult(null)
    setCurrentStep(1)
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const validation = validateStep2()
      if (!validation.isValid) {
        setSubmitResult({ success: false, message: `Please fix: ${validation.errors.join(", ")}` })
        return
      }

      setIsSubmitting(true)
      setSubmitResult(null)

      try {
        // Build multipart form data for server API
        const payload = new globalThis.FormData()
        payload.append("name", formData.name)
        payload.append("email", formData.email)
        payload.append("phone", formData.phone)
        payload.append("projectInfo", formData.projectInfo)
        payload.append("privacyConsent", String(formData.privacyConsent))
        payload.append("termsConsent", String(formData.termsConsent))

        if (formData.closeUpFile) {
          payload.append("closeUpFile", formData.closeUpFile)
        }
        if (formData.farAwayFile) {
          payload.append("farAwayFile", formData.farAwayFile)
        }

        const response = await fetch("/api/send-email", {
          method: "POST",
          body: payload,
        })

        const result = await response.json()
        if (result.success) {
          // Call Google Ads conversion tracking
          if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
            ;(window as any).gtag_report_conversion()
          }

          setSubmitResult({
            success: true,
            message:
              "Thank you! Your quote request has been submitted successfully. We'll contact you within 24 hours.",
          })
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectInfo: "",
            closeUpFile: null,
            farAwayFile: null,
            privacyConsent: false,
            termsConsent: false,
          })
          ;[...closeUpFiles, ...farAwayFiles].forEach((f) => {
            if (f.preview.startsWith("blob:")) URL.revokeObjectURL(f.preview)
          })
          setCloseUpFiles([])
          setFarAwayFiles([])
          setCurrentStep(1)
          if (formRef.current) formRef.current.reset()
          // Close mobile modal if open
          setIsMobileModalOpen(false)
        } else {
          setSubmitResult({
            success: false,
            message: `Sorry, there was an error: ${result.error}. Please try again or call us.`,
          })
        }
      } catch (error) {
        setSubmitResult({
          success: false,
          message: "An unexpected error occurred. Please try again or call us.",
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, closeUpFiles, farAwayFiles, validateStep2],
  )

  // Enhanced FileUploadArea component with mobile optimization
  const FileUploadArea = ({
    category,
    title,
    files,
    inputRef,
  }: {
    category: "closeUp" | "farAway"
    title: string
    files: FileWithPreview[]
    inputRef: React.RefObject<HTMLInputElement | null>
  }) => {
    const validFiles = files.filter((f) => !f.error)
    const hasErrors = files.some((f) => f.error)

    return (
      <div className="space-y-3">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Camera className="w-4 h-4 mr-2" />
          {title} <span className="text-red-500 ml-1">*</span>
        </label>

        <div
          className={`
            relative border-2 border-dashed rounded-lg p-4 sm:p-6 text-center transition-all duration-200 cursor-pointer
            ${
              validFiles.length > 0
                ? "border-green-400 bg-green-50 hover:bg-green-100"
                : hasErrors
                  ? "border-red-400 bg-red-50 hover:bg-red-100"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            }
          `}
          onClick={() => inputRef.current?.click()}
          onDrop={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleFileSelect(e.dataTransfer.files, category)
          }}
          onDragOver={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <input
            ref={inputRef}
            type="file"
            onChange={(e) => handleFileSelect(e.target.files, category)}
            className="hidden"
            id={`${category}File`}
            accept={ALLOWED_TYPES.join(",")}
            multiple
            disabled={isSubmitting}
          />

          {files.length === 0 ? (
            <div className="space-y-3">
              <Upload className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Click to upload or</p>
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 cursor-pointer underline text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation()
                    inputRef.current?.click()
                  }}
                >
                  browse files
                </button>
                <p className="text-xs text-gray-500 mt-1">JPEG, PNG, GIF, WebP up to 4MB each</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {files.map((fileWithPreview) => (
                  <div
                    key={fileWithPreview.id}
                    className={`
                      relative group rounded-lg overflow-hidden border-2
                      ${fileWithPreview.error ? "border-red-300" : "border-green-300"}
                    `}
                  >
                    <div className="aspect-square relative">
                      <img
                        src={fileWithPreview.preview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=200&width=200"
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                        <Button
                          type="button"
                          size="sm"
                          variant="destructive"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile(fileWithPreview.id, category)
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-2 bg-white">
                      <p className="text-xs text-gray-600 truncate" title={fileWithPreview.file.name}>
                        {fileWithPreview.file.name}
                      </p>
                      <p className="text-xs text-gray-500">{(fileWithPreview.file.size / 1024 / 1024).toFixed(1)}MB</p>
                      {fileWithPreview.error && (
                        <p className="text-xs text-red-600 mt-1" title={fileWithPreview.error}>
                          {fileWithPreview.error}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {files.length < MAX_FILES_PER_CATEGORY && (
                <div className="border-t pt-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      inputRef.current?.click()
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Add More Photos
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Step Progress Indicator
  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      <div className="flex items-center space-x-4">
        <div className={`flex items-center ${currentStep >= 1 ? 'text-red-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
            currentStep >= 1 ? 'bg-red-600 text-white border-red-600' : 'bg-white border-gray-300'
          }`}>
            1
          </div>
          <span className="ml-2 text-sm font-medium">Your Info</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <div className={`flex items-center ${currentStep >= 2 ? 'text-red-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
            currentStep >= 2 ? 'bg-red-600 text-white border-red-600' : 'bg-white border-gray-300'
          }`}>
            2
          </div>
          <span className="ml-2 text-sm font-medium">Photos & Submit</span>
        </div>
      </div>
    </div>
  )

  // Hidden Mobile Modal Trigger for external buttons
  const HiddenMobileModalTrigger = () => (
    <button
      data-mobile-form-trigger
      onClick={() => setIsMobileModalOpen(true)}
      className="hidden"
      aria-hidden="true"
    />
  )

  // Submission Result Modal (appears after form submission on both desktop and mobile)
  const SubmissionResultModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-lg max-w-lg w-full border-2 p-6 shadow-lg ${
          submitResult?.success ? "border-green-500" : "border-red-500"
        }`}
      >
        {submitResult?.success ? (
          <CheckCircle className="w-12 h-12 mx-auto text-green-600 mb-4" />
        ) : (
          <AlertCircle className="w-12 h-12 mx-auto text-red-600 mb-4" />
        )}
        <p
          className={`text-base mb-6 text-center ${
            submitResult?.success ? "text-green-800" : "text-red-800"
          }`}
        >
          {submitResult?.message}
        </p>
        <div className="flex justify-center">
          <Button onClick={() => setSubmitResult(null)}>Close</Button>
        </div>
      </div>
    </div>
  )

  // Desktop form will be rendered inline below to avoid remount issues

  return (
    <>
      {/* Desktop Form (inline to keep controlled inputs stable) */}
      <Card className="hidden md:block bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardContent className="px-6 sm:px-8 py-8 sm:py-10">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
            <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll reach out with a quote within 24 hours!</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs sm:text-sm text-green-600">
              <Shield className="w-4 h-4" />
              <span>Secure • Private • Professional</span>
            </div>
          </div>

          <StepIndicator />

          {/* SubmissionResultModal now handles display; inline Alert removed */}

          {/* Inline form content reused from previous DesktopForm */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {currentStep === 1 && (
              <>
                {/* Step 1: Basic Information */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full h-11 sm:h-12"
                    required
                    disabled={isSubmitting}
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full h-11 sm:h-12"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="(416) 555-0123"
                    className="w-full h-11 sm:h-12"
                    required
                    disabled={isSubmitting}
                    maxLength={14}
                  />
                  <p className="text-xs text-gray-500 mt-1">We'll call you within 24 hours to discuss your project</p>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 mr-2" />
                    Project Information <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Textarea
                    name="projectInfo"
                    value={formData.projectInfo}
                    onChange={handleInputChange}
                    placeholder="Describe your stucco repair needs in detail... (minimum 20 characters)"
                    className="w-full h-24 sm:h-32 resize-none"
                    required
                    disabled={isSubmitting}
                    maxLength={2000}
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.projectInfo.length}/2000 characters</p>
                </div>

                <Button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-base sm:text-lg py-3 sm:py-4 font-semibold transition-all duration-300"
                  disabled={isSubmitting}
                >
                  Next: Upload Photos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </>
            )}

            {currentStep === 2 && (
              <>
                {/* Step 2: File Upload and Terms */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                    <FileUploadArea
                      category="closeUp"
                      title="Damage Photos (Close-up)"
                      files={closeUpFiles}
                      inputRef={closeUpInputRef}
                    />

                    <FileUploadArea
                      category="farAway"
                      title="Damage Photos (Wide View)"
                      files={farAwayFiles}
                      inputRef={farAwayInputRef}
                    />
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                  Total size: {(getTotalFileSize() / (1024 * 1024)).toFixed(1)}MB / 20MB limit
                </div>

                {/* Compact Consent Checkboxes */}
                <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) => handleCheckboxChange("privacyConsent", checked as boolean)}
                      disabled={isSubmitting}
                      className="mt-0.5 flex-shrink-0 !h-3 !w-3 [&>span>svg]:!h-3 [&>span>svg]:!w-3"
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-gray-700 leading-relaxed">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyPolicy(true)}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Privacy Policy
                      </button>{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="termsConsent"
                      checked={formData.termsConsent}
                      onCheckedChange={(checked) => handleCheckboxChange("termsConsent", checked as boolean)}
                      disabled={isSubmitting}
                      className="mt-0.5 flex-shrink-0 !h-3 !w-3 [&>span>svg]:!h-3 [&>span>svg]:!w-3"
                    />
                    <label htmlFor="termsConsent" className="text-sm text-gray-700 leading-relaxed">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setShowTermsOfService(true)}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Terms of Service
                      </button>{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={handlePrevStep}
                    variant="outline"
                    className="flex-1 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-base sm:text-lg py-3 sm:py-4 font-semibold transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}

            <div className="text-center">
              <p className="text-xs text-gray-500">
                <span className="text-red-500">*</span> Required fields • Secure SSL encryption • Response within 24 hours
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Or call us directly:{" "}
                <a 
                  href="tel:4162944431" 
                  className="text-red-600 font-medium hover:underline"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      (window as any).gtag_report_conversion("tel:4162944431");
                    }
                  }}
                >
                  (416) 294-4431
                </a>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Hidden Mobile Modal Trigger */}
      <HiddenMobileModalTrigger />

      {/* Mobile Modal */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-end md:hidden z-[60]">
          <div className="bg-white rounded-t-xl max-h-[90vh] overflow-y-auto w-full">
            <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Get Your Free Quote</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
                         <div className="p-4 pb-12">
               <StepIndicator />

               {/* SubmissionResultModal now handles display; inline Alert removed */}

              <form onSubmit={handleSubmit} className="space-y-4">
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 mr-2" />
                        Full Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full h-12 text-16px"
                        required
                        disabled={isSubmitting}
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address <span className="text-red-500 ml-1">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full h-12 text-16px"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number <span className="text-red-500 ml-1">*</span>
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(416) 555-0123"
                        className="w-full h-12 text-16px"
                        required
                        disabled={isSubmitting}
                        maxLength={14}
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <FileText className="w-4 h-4 mr-2" />
                        Project Information <span className="text-red-500 ml-1">*</span>
                      </label>
                      <Textarea
                        key="mobile-project-info"
                        id="mobile-project-info"
                        name="projectInfo"
                        value={formData.projectInfo}
                        onChange={handleInputChange}
                        placeholder="Describe your stucco repair needs in detail..."
                        className="w-full h-24 resize-none text-16px"
                        required
                        disabled={isSubmitting}
                        maxLength={2000}
                      />
                      <p className="text-xs text-gray-500 mt-1">{formData.projectInfo.length}/2000 characters</p>
                    </div>

                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg py-4 font-semibold"
                      disabled={isSubmitting}
                    >
                      Next: Upload Photos
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="space-y-4">
                      <FileUploadArea
                        category="closeUp"
                        title="Damage Photos (Close-up)"
                        files={closeUpFiles}
                        inputRef={closeUpInputRef}
                      />

                      <FileUploadArea
                        category="farAway"
                        title="Damage Photos (Wide View)"
                        files={farAwayFiles}
                        inputRef={farAwayInputRef}
                      />
                    </div>

                    <div className="text-center text-sm text-gray-500">
                      Total size: {(getTotalFileSize() / (1024 * 1024)).toFixed(1)}MB / 20MB limit
                    </div>

                    <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                                                 <Checkbox
                           id="privacyConsentMobile"
                           checked={formData.privacyConsent}
                           onCheckedChange={(checked) => handleCheckboxChange("privacyConsent", checked as boolean)}
                           disabled={isSubmitting}
                           className="mt-0.5 flex-shrink-0 !h-3 !w-3 [&>span>svg]:!h-3 [&>span>svg]:!w-3"
                         />
                        <label htmlFor="privacyConsentMobile" className="text-sm text-gray-700 leading-relaxed">
                          I agree to the{" "}
                          <button
                            type="button"
                            onClick={() => setShowPrivacyPolicy(true)}
                            className="text-blue-600 hover:underline font-medium"
                          >
                            Privacy Policy
                          </button>{" "}
                          <span className="text-red-500">*</span>
                        </label>
                      </div>

                      <div className="flex items-start space-x-3">
                                                 <Checkbox
                           id="termsConsentMobile"
                           checked={formData.termsConsent}
                           onCheckedChange={(checked) => handleCheckboxChange("termsConsent", checked as boolean)}
                           disabled={isSubmitting}
                           className="mt-0.5 flex-shrink-0 !h-3 !w-3 [&>span>svg]:!h-3 [&>span>svg]:!w-3"
                         />
                        <label htmlFor="termsConsentMobile" className="text-sm text-gray-700 leading-relaxed">
                          I agree to the{" "}
                          <button
                            type="button"
                            onClick={() => setShowTermsOfService(true)}
                            className="text-blue-600 hover:underline font-medium"
                          >
                            Terms of Service
                          </button>{" "}
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="flex-1 py-4 text-lg font-semibold"
                        disabled={isSubmitting}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg py-4 font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Request
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Privacy Policy</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowPrivacyPolicy(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="prose prose-sm max-w-none">
                <p>
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <h3>Information We Collect</h3>
                <p>We collect the following information when you submit a quote request:</p>
                <ul>
                  <li>Name and contact information (email, phone number)</li>
                  <li>Project details and requirements</li>
                  <li>Photos of your stucco damage (required for accurate quotes)</li>
                </ul>
                <h3>How We Use Your Information</h3>
                <p>Your information is used solely to:</p>
                <ul>
                  <li>Provide you with a stucco repair quote</li>
                  <li>Contact you about your project</li>
                  <li>Schedule consultations and services</li>
                </ul>
                <h3>Information Sharing</h3>
                <p>
                  We do not sell, trade, or share your personal information with third parties except as necessary to
                  provide our services.
                </p>
                <h3>Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
                <h3>Contact Us</h3>
                <p>If you have questions about this Privacy Policy, contact us at:</p>
                <p>
                  Email: info@stuccorepair.ca
                  <br />
                  Phone: (416) 294-4431
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setShowPrivacyPolicy(false)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsOfService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Terms of Service</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowTermsOfService(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="prose prose-sm max-w-none">
                <p>
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <h3>Quote Request Terms</h3>
                <p>By submitting a quote request, you understand that:</p>
                <ul>
                  <li>This is a request for information only</li>
                  <li>No binding agreement is created until a written contract is signed</li>
                  <li>Quotes are valid for 30 days from the date provided</li>
                  <li>Photos are required for accurate assessment</li>
                </ul>
                <h3>Service Terms</h3>
                <p>Our stucco repair services are subject to:</p>
                <ul>
                  <li>Site inspection and feasibility assessment</li>
                  <li>Weather conditions and seasonal availability</li>
                  <li>Material availability and pricing</li>
                  <li>Local building codes and permit requirements</li>
                </ul>
                <h3>Liability</h3>
                <p>
                  StuccoRepair.ca is licensed and insured. Our liability is limited to the terms specified in signed
                  service contracts.
                </p>
                <h3>Dispute Resolution</h3>
                <p>Any disputes will be resolved through mediation in Ontario, Canada, under Ontario law.</p>
                <h3>Contact Information</h3>
                <p>For questions about these terms:</p>
                <p>
                  StuccoRepair.ca
                  <br />
                  Email: info@stuccorepair.ca
                  <br />
                  Phone: (416) 294-4431
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setShowTermsOfService(false)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submission Result Modal */}
      {submitResult && <SubmissionResultModal />}
    </>
  )
}
