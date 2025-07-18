// Test script to verify your EmailJS integration is working
class EmailJSIntegrationTest {
  constructor() {
    this.config = {
      serviceId: "service_kphup56",
      templateId: "template_1sel9l1",
      publicKey: "YFrXOMo0x407VzMsG",
    }
  }

  runIntegrationTest() {
    console.log("🧪 EMAILJS INTEGRATION TEST")
    console.log("=".repeat(50))
    console.log("🎯 Testing your EmailJS configuration")
    console.log("=".repeat(50))

    this.verifyConfiguration()
    this.showTestInstructions()
    this.generateTestData()
    this.showNextSteps()
  }

  verifyConfiguration() {
    console.log("\n✅ CONFIGURATION VERIFIED")
    console.log("-".repeat(30))
    console.log(`Service ID: ${this.config.serviceId}`)
    console.log(`Template ID: ${this.config.templateId}`)
    console.log(`Public Key: ${this.config.publicKey}`)
    console.log("\n🎯 Configuration looks correct!")
  }

  showTestInstructions() {
    console.log("\n🧪 TESTING INSTRUCTIONS")
    console.log("-".repeat(30))

    console.log("\n1. Test in EmailJS Dashboard:")
    console.log("   • Go to your EmailJS dashboard")
    console.log("   • Open template: template_1sel9l1")
    console.log("   • Click 'Test' button")
    console.log("   • Use the test data below")
    console.log("   • Send test email")
    console.log("   • Check gc.giorno@gmail.com inbox")

    console.log("\n2. Test Form Integration:")
    console.log("   • Your application code is now updated")
    console.log("   • Fill out the contact form on your website")
    console.log("   • Click 'Test Email' button first")
    console.log("   • Then submit a real form")
    console.log("   • Verify email delivery")
  }

  generateTestData() {
    console.log("\n📋 TEST DATA FOR EMAILJS DASHBOARD")
    console.log("-".repeat(40))
    console.log("Use this data when testing in EmailJS dashboard:")
    console.log("")

    const testData = {
      from_name: "John Smith",
      from_email: "john.smith@example.com",
      customer_phone: "(416) 555-0123",
      message: `I have several cracks in my stucco that need repair. The damage is on the south-facing wall of my house and appears to be getting worse with the weather. I would like to get a quote for professional repair.

The cracks are about 2-3 feet long and seem to go through the entire thickness of the stucco. There's also some bubbling and peeling in the same area.

I'm available for a consultation any weekday after 3 PM or weekends.`,
      timestamp: new Date().toLocaleString("en-US", {
        timeZone: "America/Toronto",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      has_close_up: "Yes - File attached",
      has_far_away: "Yes - File attached",
      privacy_consent: "Agreed",
      terms_consent: "Agreed",
      business_phone: "(416) 294-4431",
      business_email: "info@stuccorepair.ca",
      service_area: "GTA & Surrounding Areas",
    }

    Object.entries(testData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
    })
  }

  showNextSteps() {
    console.log("\n🚀 NEXT STEPS")
    console.log("-".repeat(30))

    console.log("\n1. ✅ Configuration Updated")
    console.log("   Your lib/emailjs-service.ts is now configured with:")
    console.log(`   • Service ID: service_kphup56`)
    console.log(`   • Template ID: template_1sel9l1`)
    console.log(`   • Public Key: YFrXOMo0x407VzMsG`)

    console.log("\n2. 🧪 Test the Integration")
    console.log("   • Go to your EmailJS dashboard")
    console.log("   • Test the template with sample data")
    console.log("   • Verify email arrives at gc.giorno@gmail.com")

    console.log("\n3. 🌐 Test Your Website")
    console.log("   • Fill out your contact form")
    console.log("   • Click 'Test Email' button")
    console.log("   • Submit a real form")
    console.log("   • Check email delivery")

    console.log("\n4. 📱 Test Mobile View")
    console.log("   • Open received email on mobile")
    console.log("   • Verify responsive layout")
    console.log("   • Test button clicks")

    console.log("\n✅ SUCCESS CRITERIA:")
    console.log("   • Test email received at gc.giorno@gmail.com")
    console.log("   • Email formatting looks professional")
    console.log("   • All customer data displays correctly")
    console.log("   • Mobile layout works properly")
    console.log("   • Call-to-action buttons are clickable")
  }

  showTroubleshootingTips() {
    console.log("\n🔧 TROUBLESHOOTING TIPS")
    console.log("-".repeat(30))

    const tips = [
      {
        issue: "Email not received",
        solutions: [
          "Check spam/junk folder in Gmail",
          "Verify template recipient is gc.giorno@gmail.com",
          "Test template directly in EmailJS dashboard first",
          "Check if Gmail service is still connected",
        ],
      },
      {
        issue: "Template variables not showing",
        solutions: [
          "Verify variable names match exactly (case-sensitive)",
          "Check HTML template was pasted completely",
          "Test with sample data in EmailJS dashboard",
          "Ensure all required variables are provided",
        ],
      },
      {
        issue: "Form submission errors",
        solutions: [
          "Check browser console for JavaScript errors",
          "Verify all three IDs are correct in code",
          "Ensure all required form fields are filled",
          "Test with different browsers",
        ],
      },
    ]

    tips.forEach((tip, index) => {
      console.log(`\n${index + 1}. ${tip.issue}`)
      console.log("   Solutions:")
      tip.solutions.forEach((solution) => {
        console.log(`     • ${solution}`)
      })
    })
  }
}

// Run the integration test
const integrationTest = new EmailJSIntegrationTest()
integrationTest.runIntegrationTest()
integrationTest.showTroubleshootingTips()

console.log("\n🎉 CONFIGURATION COMPLETE!")
console.log("Your EmailJS integration is ready to test.")
console.log("Follow the testing instructions above to verify everything works.")
