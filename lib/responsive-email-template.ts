// Responsive Email Template for Stucco Repair Quotes
// This template is designed to work well across all email clients

export interface EmailTemplateData {
  name: string
  email: string
  phone: string
  projectInfo: string
  timestamp: string
  userAgent?: string
  referrer?: string
}

export function generateEmailTemplate(data: EmailTemplateData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Stucco Repair Quote Request</title>
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* Base styles */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px 20px;
        }
        
        .section {
            margin-bottom: 25px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #dc2626;
        }
        
        .section h2 {
            color: #dc2626;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .section h2::before {
            content: "●";
            margin-right: 8px;
            font-size: 12px;
        }
        
        .field {
            margin-bottom: 15px;
        }
        
        .field:last-child {
            margin-bottom: 0;
        }
        
        .field-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 4px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .field-value {
            color: #1f2937;
            font-size: 16px;
            padding: 8px 0;
        }
        
        .project-info {
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            padding: 15px;
            font-size: 15px;
            line-height: 1.6;
            white-space: pre-wrap;
        }
        
        .metadata {
            background-color: #f3f4f6;
            border-radius: 6px;
            padding: 15px;
            font-size: 13px;
            color: #6b7280;
        }
        
        .metadata-item {
            margin-bottom: 5px;
        }
        
        .metadata-item:last-child {
            margin-bottom: 0;
        }
        
        .footer {
            background-color: #1f2937;
            color: #d1d5db;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
        
        .footer a {
            color: #fbbf24;
            text-decoration: none;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        .urgent-notice {
            background-color: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        .urgent-notice h3 {
            color: #92400e;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .urgent-notice p {
            color: #78350f;
            font-size: 14px;
            margin: 0;
        }
        
        /* Mobile responsiveness */
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            
            .header {
                padding: 20px 15px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .content {
                padding: 20px 15px;
            }
            
            .section {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏠 New Quote Request</h1>
            <p>Stucco Repair Toronto</p>
        </div>
        
        <div class="content">
            <div class="urgent-notice">
                <h3>⚡ Action Required</h3>
                <p>New quote request received. Please respond within 24 hours to maintain service standards.</p>
            </div>
            
            <div class="section">
                <h2>Customer Information</h2>
                <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${data.name}</div>
                </div>
                <div class="field">
                    <div class="field-label">Email Address</div>
                    <div class="field-value">
                        <a href="mailto:${data.email}" style="color: #dc2626; text-decoration: none;">${data.email}</a>
                    </div>
                </div>
                <div class="field">
                    <div class="field-label">Phone Number</div>
                    <div class="field-value">
                        <a href="tel:${data.phone.replace(/\D/g, "")}" style="color: #dc2626; text-decoration: none;">${data.phone}</a>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>Project Details</h2>
                <div class="field">
                    <div class="field-label">Project Information</div>
                    <div class="project-info">${data.projectInfo}</div>
                </div>
            </div>
            
            <div class="metadata">
                <div class="metadata-item"><strong>Submitted:</strong> ${data.timestamp}</div>
                ${data.userAgent ? `<div class="metadata-item"><strong>Browser:</strong> ${data.userAgent}</div>` : ""}
                ${data.referrer ? `<div class="metadata-item"><strong>Referrer:</strong> ${data.referrer}</div>` : ""}
                <div class="metadata-item"><strong>Source:</strong> StuccoRepair.ca Contact Form</div>
            </div>
        </div>
        
        <div class="footer">
            <p>
                <strong>Stucco Repair Toronto</strong><br>
                📞 <a href="tel:4162944431">(416) 294-4431</a> | 
                ✉️ <a href="mailto:info@stuccorepair.ca">info@stuccorepair.ca</a>
            </p>
            <p style="margin-top: 10px; font-size: 12px; opacity: 0.8;">
                This email was generated automatically from your website contact form.
            </p>
        </div>
    </div>
</body>
</html>
  `.trim()
}

// Plain text version for email clients that don't support HTML
export function generatePlainTextTemplate(data: EmailTemplateData): string {
  return `
NEW STUCCO REPAIR QUOTE REQUEST
===============================

CUSTOMER INFORMATION:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

PROJECT DETAILS:
${data.projectInfo}

SUBMISSION DETAILS:
- Submitted: ${data.timestamp}
- Source: StuccoRepair.ca Contact Form
${data.userAgent ? `- Browser: ${data.userAgent}` : ""}
${data.referrer ? `- Referrer: ${data.referrer}` : ""}

---
Stucco Repair Toronto
Phone: (416) 294-4431
Email: info@stuccorepair.ca

Please respond within 24 hours to maintain service standards.
  `.trim()
}
