// Enhanced EmailJS service with comprehensive error handling and debugging
import emailjs from "@emailjs/browser"

interface EmailJSConfig {
  serviceId: string
  templateId: string
  publicKey: string
}

interface FormData {
  name: string
  email: string
  phone: string
  projectInfo: string
  closeUpFile: File | null
  farAwayFile: File | null
  privacyConsent: boolean
  termsConsent: boolean
}

interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
  timestamp: string
  debugInfo?: {
    configUsed: EmailJSConfig
    templateParams: any
    fileInfo: {
      closeUpFile?: { name: string; size: number; type: string }
      farAwayFile?: { name: string; size: number; type: string }
    }
  }
}

interface DebugLog {
  timestamp: string
  level: "info" | "warn" | "error"
  message: string
  data?: any
}

export class EmailJSService {
  private config: EmailJSConfig
  private static instance: EmailJSService
  private debugLogs: DebugLog[] = []
  private initialized = false

  constructor() {
    // EmailJS configuration - Your actual values
    this.config = {
      serviceId: "service_kphup56", // Your Gmail service ID from EmailJS
      templateId: "template_1sel9l1", // Your template ID from EmailJS
      publicKey: "YFrXOMo0x407VzMsG", // Your public key from EmailJS
    }

    this.addDebugLog("info", "EmailJS service initialized", this.config)
  }

  static getInstance(): EmailJSService {
    if (!EmailJSService.instance) {
      EmailJSService.instance = new EmailJSService()
    }
    return EmailJSService.instance
  }

  private addDebugLog(level: DebugLog["level"], message: string, data?: any) {
    const log: DebugLog = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    }

    this.debugLogs.push(log)

    // Keep only last 50 logs
    if (this.debugLogs.length > 50) {
      this.debugLogs = this.debugLogs.slice(-50)
    }

    // Console logging
    const consoleMethod = level === "error" ? console.error : level === "warn" ? console.warn : console.log
    consoleMethod(`[EmailJS] ${message}`, data || "")
  }

  updateConfig(config: Partial<EmailJSConfig>) {
    this.config = { ...this.config, ...config }
    this.initialized = false // Force re-initialization
    this.addDebugLog("info", "Configuration updated", this.config)
  }

  private async initializeEmailJS(): Promise<boolean> {
    try {
      if (this.initialized) {
        return true
      }

      // Validate configuration
      if (!this.config.serviceId || !this.config.templateId || !this.config.publicKey) {
        throw new Error("EmailJS configuration is incomplete")
      }

      // Initialize EmailJS with public key
      emailjs.init(this.config.publicKey)
      this.initialized = true

      this.addDebugLog("info", "EmailJS initialized successfully")
      return true
    } catch (error) {
      this.addDebugLog("error", "EmailJS initialization failed", error)
      return false
    }
  }

  private validateFormData(data: FormData): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    // Basic validation
    if (!data.name?.trim()) errors.push("Name is required")
    if (!data.email?.trim()) errors.push("Email is required")
    if (!data.phone?.trim()) errors.push("Phone is required")
    if (!data.projectInfo?.trim()) errors.push("Project information is required")

    // Email format validation
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push("Invalid email format")
    }

    // Consent validation
    if (!data.privacyConsent) errors.push("Privacy consent required")
    if (!data.termsConsent) errors.push("Terms consent required")

    // File validation (now mandatory)
    if (!data.closeUpFile) errors.push("Close-up photo is required")
    if (!data.farAwayFile) errors.push("Wide view photo is required")

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  private async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        // Remove the data URL prefix to get just the base64 data
        const base64Data = result.split(",")[1]
        resolve(base64Data)
      }
      reader.onerror = (error) => {
        this.addDebugLog("error", "File conversion to base64 failed", { fileName: file.name, error })
        reject(error)
      }
      reader.readAsDataURL(file)
    })
  }

  async sendEmail(data: FormData): Promise<EmailResult> {
    const timestamp = new Date().toISOString()

    this.addDebugLog("info", "Starting email send process", {
      hasCloseUpFile: !!data.closeUpFile,
      hasFarAwayFile: !!data.farAwayFile,
      formDataKeys: Object.keys(data),
    })

    try {
      // Initialize EmailJS
      const initSuccess = await this.initializeEmailJS()
      if (!initSuccess) {
        throw new Error("Failed to initialize EmailJS")
      }

      // Validate form data
      const validation = this.validateFormData(data)
      if (!validation.isValid) {
        throw new Error(`Form validation failed: ${validation.errors.join(", ")}`)
      }

      // Prepare file information for email
      let closeUpFileInfo = "No file uploaded"
      let farAwayFileInfo = "No file uploaded"
      let attachmentDetails = ""

      // Use a plain object for fileInfo to avoid type errors
      const fileInfo: {
        closeUpFile?: { name: string; size: number; type: string }
        farAwayFile?: { name: string; size: number; type: string }
      } = {}

      if (data.closeUpFile) {
        fileInfo.closeUpFile = {
          name: data.closeUpFile.name,
          size: data.closeUpFile.size,
          type: data.closeUpFile.type,
        }
        closeUpFileInfo = `Yes - ${data.closeUpFile.name} (${this.formatFileSize(data.closeUpFile.size)})`
        attachmentDetails += `\n📸 Close-up Photo: ${data.closeUpFile.name} (${this.formatFileSize(data.closeUpFile.size)})`

        this.addDebugLog("info", "Close-up file processed", fileInfo.closeUpFile)
      }

      if (data.farAwayFile) {
        fileInfo.farAwayFile = {
          name: data.farAwayFile.name,
          size: data.farAwayFile.size,
          type: data.farAwayFile.type,
        }
        farAwayFileInfo = `Yes - ${data.farAwayFile.name} (${this.formatFileSize(data.farAwayFile.size)})`
        attachmentDetails += `\n📸 Wide View Photo: ${data.farAwayFile.name} (${this.formatFileSize(data.farAwayFile.size)})`

        this.addDebugLog("info", "Wide view file processed", fileInfo.farAwayFile)
      }

      // Prepare template parameters for Gmail service
      const templateParams = {
        // Recipient (your business email)
        to_email: "adi.bivol@gmail.com",

        // Customer information
        from_name: data.name,
        from_email: data.email,
        customer_phone: data.phone,

        // Email subject
        subject: `New Stucco Repair Quote Request from ${data.name}`,

        // Enhanced project details with file information
        message: `${data.projectInfo}${attachmentDetails ? "\n\n--- ATTACHED PHOTOS ---" + attachmentDetails : ""}`,

        // Timestamp
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "America/Toronto",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),

        // File attachment status with detailed info
        has_close_up: closeUpFileInfo,
        has_far_away: farAwayFileInfo,

        // Consent confirmations
        privacy_consent: data.privacyConsent ? "Agreed" : "Not agreed",
        terms_consent: data.termsConsent ? "Agreed" : "Not agreed",

        // Additional business info
        business_phone: "(416) 294-4431",
        business_email: "info@stuccorepair.ca",
        service_area: "GTA & Surrounding Areas",

        // Photo count summary
        total_photos: `${data.closeUpFile ? 1 : 0} close-up + ${data.farAwayFile ? 1 : 0} wide view = ${(data.closeUpFile ? 1 : 0) + (data.farAwayFile ? 1 : 0)} total photos`,

        // System information for debugging
        browser_info: navigator.userAgent,
        form_timestamp: timestamp,
        debug_info: `Files processed: ${Object.keys(fileInfo).length}, Total size: ${
          (fileInfo.closeUpFile?.size || 0) + (fileInfo.farAwayFile?.size || 0)
        } bytes`,
      }

      this.addDebugLog("info", "Template parameters prepared", {
        parameterCount: Object.keys(templateParams).length,
        hasFiles: !!(data.closeUpFile || data.farAwayFile),
      })

      // Send email using EmailJS Gmail service
      this.addDebugLog("info", "Sending email via EmailJS")
      const response = await emailjs.send(this.config.serviceId, this.config.templateId, templateParams)

      this.addDebugLog("info", "Email sent successfully", {
        status: response.status,
        text: response.text,
      })

      // Log successful submission for analytics
      this.logSubmission(data, response.text)

      return {
        success: true,
        messageId: response.text,
        timestamp,
        debugInfo: {
          configUsed: this.config,
          templateParams,
          fileInfo,
        },
      }
    } catch (error) {
      this.addDebugLog("error", "EmailJS sending failed", error)

      // Log failed submission for analytics
      this.logSubmission(data, null, error)

      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
        timestamp,
        debugInfo: {
          configUsed: this.config,
          templateParams: null, // Cannot include if error before this point
          fileInfo: {
            closeUpFile: data.closeUpFile
              ? { name: data.closeUpFile.name, size: data.closeUpFile.size, type: data.closeUpFile.type }
              : undefined,
            farAwayFile: data.farAwayFile
              ? { name: data.farAwayFile.name, size: data.farAwayFile.size, type: data.farAwayFile.type }
              : undefined,
          },
        },
      }
    }
  }

  private logSubmission(data: FormData, messageId: string | null, error?: any) {
    // Enhanced analytics logging for tracking form submissions with file info
    const logData = {
      timestamp: new Date().toISOString(),
      customerName: data.name,
      customerEmail: data.email,
      customerPhone: data.phone,
      projectInfoLength: data.projectInfo.length,
      hasCloseUpPhoto: !!data.closeUpFile,
      hasFarAwayPhoto: !!data.farAwayFile,
      closeUpFileSize: data.closeUpFile ? data.closeUpFile.size : 0,
      farAwayFileSize: data.farAwayFile ? data.farAwayFile.size : 0,
      closeUpFileName: data.closeUpFile ? data.closeUpFile.name : null,
      farAwayFileName: data.farAwayFile ? data.farAwayFile.name : null,
      totalFileSize: (data.closeUpFile ? data.closeUpFile.size : 0) + (data.farAwayFile ? data.farAwayFile.size : 0),
      privacyConsent: data.privacyConsent,
      termsConsent: data.termsConsent,
      success: !!messageId,
      messageId: messageId,
      error: error?.message,
    }

    // In production, send this to your analytics service
    this.addDebugLog("info", "Form Submission Analytics Log", logData)

    // You can integrate with Google Analytics, Mixpanel, etc.
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "form_submission", {
        event_category: "engagement",
        event_label: messageId ? "success" : "failure",
        value: 1,
        custom_parameters: {
          has_photos: logData.hasCloseUpPhoto || logData.hasFarAwayPhoto,
          total_file_size: logData.totalFileSize,
        },
      })
    }
  }

  async sendTestEmail(): Promise<EmailResult> {
    const testData: FormData = {
      name: "EmailJS Test System - Enhanced",
      email: "test@stuccorepair.ca",
      phone: "(416) 294-4431",
      projectInfo: `This is a test email to verify the enhanced EmailJS Gmail integration with file upload support.

Test Details:
- Service: EmailJS with Gmail
- Sent: ${new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })}
- Purpose: Enhanced email system verification with file upload support
- Target: gc.giorno@gmail.com
- Features: Drag-and-drop file uploads, mandatory photos, file validation

If you receive this email, the enhanced EmailJS integration is functioning properly and ready for production use with the new file upload features.`,
      closeUpFile: null, // Test without files
      farAwayFile: null,
      privacyConsent: true,
      termsConsent: true,
    }

    return this.sendEmail(testData)
  }
}

export const emailJSService = EmailJSService.getInstance()
export type { FormData, EmailResult, EmailJSConfig }
