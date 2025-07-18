// Email Client Testing Utilities
// Helps test email templates across different email clients

export interface EmailClient {
  name: string
  marketShare: number
  htmlSupport: "full" | "limited" | "none"
  cssSupport: "full" | "limited" | "none"
  imageSupport: boolean
  darkModeSupport: boolean
  notes: string[]
}

export const emailClients: EmailClient[] = [
  {
    name: "Gmail (Web)",
    marketShare: 35.2,
    htmlSupport: "full",
    cssSupport: "limited",
    imageSupport: true,
    darkModeSupport: true,
    notes: [
      "Strips <style> tags in head",
      "Supports inline CSS",
      "Good mobile support",
      "Automatic image blocking by default",
    ],
  },
  {
    name: "Apple Mail (iOS)",
    marketShare: 28.1,
    htmlSupport: "full",
    cssSupport: "full",
    imageSupport: true,
    darkModeSupport: true,
    notes: [
      "Excellent CSS support",
      "Supports media queries",
      "Automatic dark mode conversion",
      "Good accessibility features",
    ],
  },
  {
    name: "Outlook (Desktop)",
    marketShare: 12.4,
    htmlSupport: "limited",
    cssSupport: "limited",
    imageSupport: true,
    darkModeSupport: false,
    notes: [
      "Uses Word rendering engine",
      "Limited CSS support",
      "No flexbox or grid support",
      "Requires table-based layouts",
    ],
  },
  {
    name: "Yahoo Mail",
    marketShare: 8.9,
    htmlSupport: "full",
    cssSupport: "limited",
    imageSupport: true,
    darkModeSupport: false,
    notes: ["Similar to Gmail", "Strips <style> tags", "Good inline CSS support", "Mobile app has limitations"],
  },
  {
    name: "Outlook.com (Web)",
    marketShare: 7.2,
    htmlSupport: "full",
    cssSupport: "limited",
    imageSupport: true,
    darkModeSupport: true,
    notes: [
      "Better than desktop Outlook",
      "Supports some modern CSS",
      "Good mobile responsiveness",
      "Dark mode available",
    ],
  },
]

export interface TestResult {
  client: string
  passed: boolean
  issues: string[]
  recommendations: string[]
}

export function testEmailTemplate(htmlContent: string): TestResult[] {
  const results: TestResult[] = []

  emailClients.forEach((client) => {
    const issues: string[] = []
    const recommendations: string[] = []
    let passed = true

    // Test for common issues
    if (htmlContent.includes("<style>") && client.cssSupport === "limited") {
      issues.push("Contains <style> tags which may be stripped")
      recommendations.push("Move all CSS inline")
      passed = false
    }

    if (htmlContent.includes("flexbox") || (htmlContent.includes("grid") && client.name.includes("Outlook"))) {
      issues.push("Uses modern CSS layout methods not supported")
      recommendations.push("Use table-based layout for better compatibility")
      passed = false
    }

    if (htmlContent.includes("@media") && client.cssSupport === "limited") {
      issues.push("Media queries may not work")
      recommendations.push("Design mobile-first with inline styles")
    }

    if (htmlContent.includes("<img") && !client.imageSupport) {
      issues.push("Images may not display")
      recommendations.push("Provide alt text and consider text-based design")
      passed = false
    }

    // Check for accessibility
    if (!htmlContent.includes("alt=")) {
      issues.push("Missing alt text for images")
      recommendations.push("Add descriptive alt text for all images")
    }

    if (!htmlContent.includes("lang=")) {
      issues.push("Missing language attribute")
      recommendations.push("Add lang attribute to html tag")
    }

    results.push({
      client: client.name,
      passed,
      issues,
      recommendations,
    })
  })

  return results
}

export function generateCompatibilityReport(htmlContent: string): string {
  const results = testEmailTemplate(htmlContent)
  const totalClients = results.length
  const passedClients = results.filter((r) => r.passed).length
  const compatibilityScore = Math.round((passedClients / totalClients) * 100)

  let report = `EMAIL TEMPLATE COMPATIBILITY REPORT
${"=".repeat(40)}

Overall Compatibility Score: ${compatibilityScore}% (${passedClients}/${totalClients} clients)

DETAILED RESULTS:
`

  results.forEach((result) => {
    const status = result.passed ? "✅ PASSED" : "❌ FAILED"
    report += `
${result.client}: ${status}
`

    if (result.issues.length > 0) {
      report += `  Issues:
${result.issues.map((issue) => `    • ${issue}`).join("\n")}
`
    }

    if (result.recommendations.length > 0) {
      report += `  Recommendations:
${result.recommendations.map((rec) => `    • ${rec}`).join("\n")}
`
    }
  })

  report += `
GENERAL RECOMMENDATIONS:
• Use inline CSS for maximum compatibility
• Test with table-based layouts for Outlook
• Provide fallback fonts (Arial, sans-serif)
• Keep email width under 600px
• Use web-safe colors
• Include alt text for all images
• Test dark mode appearance
• Validate HTML markup
`

  return report
}

// Usage example:
export function runEmailTest() {
  console.log("=== EMAIL CLIENT COMPATIBILITY TEST ===")

  // This would normally test your actual email template
  const sampleTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <style>
            .container { max-width: 600px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Test Email</h1>
            <img src="logo.png" alt="Company Logo">
        </div>
    </body>
    </html>
  `

  const report = generateCompatibilityReport(sampleTemplate)
  console.log(report)
}
