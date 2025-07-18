// Quick setup script for EmailJS implementation
class EmailJSQuickSetup {
  constructor() {
    this.setupData = {
      accountEmail: "gc.giorno@gmail.com",
      serviceName: "StuccoRepair Gmail",
      templateName: "Stucco Contact Form",
      subject: "New Stucco Quote Request from {{from_name}}",
    }
  }

  generateQuickSetupGuide() {
    console.log("⚡ EMAILJS QUICK SETUP GUIDE")
    console.log("=".repeat(50))
    console.log("🎯 Get your email template working in 10 minutes")
    console.log("=".repeat(50))

    this.showQuickSteps()
    this.showTemplateVariables()
    this.showConfigurationExample()
    this.showTestingInstructions()
  }

  showQuickSteps() {
    console.log("\n🚀 QUICK SETUP STEPS (10 minutes)")
    console.log("-".repeat(40))

    const steps = [
      {
        step: 1,
        title: "Create Account",
        time: "2 min",
        action: "Sign up at emailjs.com with gc.giorno@gmail.com",
      },
      {
        step: 2,
        title: "Connect Gmail",
        time: "2 min",
        action: "Add Gmail service and authorize access",
      },
      {
        step: 3,
        title: "Create Template",
        time: "3 min",
        action: "Create new template and paste HTML code",
      },
      {
        step: 4,
        title: "Get API Keys",
        time: "1 min",
        action: "Copy Service ID, Template ID, and Public Key",
      },
      {
        step: 5,
        title: "Update Code",
        time: "1 min",
        action: "Update lib/emailjs-service.ts with your IDs",
      },
      {
        step: 6,
        title: "Test",
        time: "1 min",
        action: "Send test email and verify delivery",
      },
    ]

    steps.forEach((step) => {
      console.log(`\n${step.step}. ${step.title} (${step.time})`)
      console.log(`   ${step.action}`)
    })
  }

  showTemplateVariables() {
    console.log("\n📋 TEMPLATE VARIABLES (Auto-populated)")
    console.log("-".repeat(40))

    const variables = [
      "{{from_name}} - Customer's full name",
      "{{from_email}} - Customer's email address",
      "{{customer_phone}} - Customer's phone number",
      "{{message}} - Project details and requirements",
      "{{timestamp}} - When form was submitted",
      "{{has_close_up}} - Close-up photo status",
      "{{has_far_away}} - Wide view photo status",
      "{{privacy_consent}} - Privacy policy agreement",
      "{{terms_consent}} - Terms of service agreement",
    ]

    variables.forEach((variable) => {
      console.log(`   • ${variable}`)
    })
  }

  showConfigurationExample() {
    console.log("\n⚙️ CONFIGURATION EXAMPLE")
    console.log("-".repeat(40))

    console.log("After getting your IDs, update lib/emailjs-service.ts:")
    console.log("")
    console.log("// Replace with your actual EmailJS values")
    console.log("const config = {")
    console.log("  serviceId: 'service_abc123',     // Your Gmail service ID")
    console.log("  templateId: 'template_xyz789',   // Your template ID")
    console.log("  publicKey: 'user_def456ghi789'   // Your public key")
    console.log("}")
    console.log("")
    console.log("Example of what the IDs look like:")
    console.log("• Service ID: service_stucco_gmail")
    console.log("• Template ID: template_contact_form")
    console.log("• Public Key: user_1a2b3c4d5e6f7g8h")
  }

  showTestingInstructions() {
    console.log("\n🧪 TESTING INSTRUCTIONS")
    console.log("-".repeat(40))

    console.log("1. Test in EmailJS Dashboard:")
    console.log("   • Click 'Test' button in template editor")
    console.log("   • Fill sample data for all variables")
    console.log("   • Send test email")
    console.log("   • Check gc.giorno@gmail.com inbox")

    console.log("\n2. Test Form Integration:")
    console.log("   • Fill out contact form on website")
    console.log("   • Click 'Test Email' button first")
    console.log("   • Then submit actual form")
    console.log("   • Verify email delivery and formatting")

    console.log("\n3. Test Mobile View:")
    console.log("   • Open received email on mobile device")
    console.log("   • Verify single-column layout")
    console.log("   • Test button clicks and links")
    console.log("   • Check readability and spacing")
  }

  showTroubleshootingTips() {
    console.log("\n🔧 QUICK TROUBLESHOOTING")
    console.log("-".repeat(40))

    const issues = [
      {
        problem: "Email not received",
        solution: "Check spam folder, verify recipient email",
      },
      {
        problem: "Variables not showing",
        solution: "Check variable names match exactly (case-sensitive)",
      },
      {
        problem: "Template looks broken",
        solution: "Ensure HTML was pasted completely in EmailJS",
      },
      {
        problem: "Form not submitting",
        solution: "Verify Service ID, Template ID, and Public Key",
      },
    ]

    issues.forEach((issue, index) => {
      console.log(`\n${index + 1}. ${issue.problem}`)
      console.log(`   Solution: ${issue.solution}`)
    })
  }
}

// Execute quick setup guide
function showEmailJSQuickSetup() {
  const quickSetup = new EmailJSQuickSetup()
  quickSetup.generateQuickSetupGuide()
  quickSetup.showTroubleshootingTips()

  console.log("\n🎉 YOU'RE READY TO GO!")
  console.log("Follow the steps above to get your email template working.")
  console.log("The template is already optimized and ready for EmailJS.")
  console.log("Total setup time: ~10 minutes")
}

if (require.main === module) {
  showEmailJSQuickSetup()
}

module.exports = { EmailJSQuickSetup }
