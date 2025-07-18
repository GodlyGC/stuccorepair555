// STEP-BY-STEP EMAILJS IMPLEMENTATION GUIDE
class EmailJSImplementation {
  constructor() {
    this.templateCode = this.getEmailTemplateCode()
  }

  getEmailTemplateCode() {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>New Quote Request - StuccoRepair.ca</title>
    
    <style type="text/css">
        /* Reset and base styles */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }
        table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        
        /* Mobile styles */
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: auto !important; }
            .fluid { width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important; }
            .stack-column, .stack-column-center { display: block !important; width: 100% !important; max-width: 100% !important; direction: ltr !important; }
            .stack-column-center { text-align: center !important; }
            .center-on-narrow { text-align: center !important; display: block !important; margin-left: auto !important; margin-right: auto !important; float: none !important; }
            table.center-on-narrow { display: inline-block !important; }
            
            /* Mobile typography */
            .mobile-h1 { font-size: 28px !important; line-height: 36px !important; }
            .mobile-h2 { font-size: 22px !important; line-height: 28px !important; }
            .mobile-h3 { font-size: 18px !important; line-height: 24px !important; }
            .mobile-text { font-size: 16px !important; line-height: 24px !important; }
            .mobile-small { font-size: 14px !important; line-height: 20px !important; }
            
            /* Mobile spacing */
            .mobile-padding { padding: 20px !important; }
            .mobile-padding-small { padding: 15px !important; }
            .mobile-margin { margin: 15px 0 !important; }
            
            /* Mobile buttons */
            .mobile-button { width: 100% !important; padding: 15px 20px !important; font-size: 18px !important; }
            
            /* Hide desktop elements */
            .desktop-only { display: none !important; }
            .mobile-only { display: block !important; }
            
            /* Mobile logo */
            .mobile-logo { width: 200px !important; height: auto !important; }
        }
        
        /* Desktop styles */
        @media only screen and (min-width: 601px) {
            .desktop-only { display: block !important; }
            .mobile-only { display: none !important; }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <center style="width: 100%; background-color: #f5f5f5;">
        
        <!-- Visually Hidden Preheader Text -->
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            New stucco repair quote request from {{from_name}} - {{customer_phone}} - StuccoRepair.ca Professional Services
        </div>
        
        <!-- Email Container -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: auto;" class="email-container">
            
            <!-- Header Section -->
            <tr>
                <td style="padding: 0; background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); text-align: center;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 30px 20px; text-align: center;">
                                <!-- Logo -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                                    <tr>
                                        <td style="text-align: center;">
                                            <!-- Desktop Logo -->
                                            <div class="desktop-only">
                                                <div style="font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                                                    StuccoRepair.ca
                                                </div>
                                            </div>
                                            <!-- Mobile Logo -->
                                            <div class="mobile-only mobile-logo">
                                                <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                                                    StuccoRepair.ca
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Header Text -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 20px;">
                                    <tr>
                                        <td style="text-align: center;">
                                            <h1 style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 32px; line-height: 40px; color: #ffffff; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);" class="mobile-h1">
                                                New Quote Request
                                            </h1>
                                            <p style="margin: 10px 0 0 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 18px; line-height: 24px; color: #fecaca; font-weight: 500;" class="mobile-text">
                                                Professional Stucco Services in the GTA
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <!-- Main Content -->
            <tr>
                <td style="padding: 0; background-color: #ffffff;">
                    
                    <!-- Welcome Message -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 40px 30px 30px 30px; text-align: center; background-color: #ffffff;" class="mobile-padding">
                                <h2 style="margin: 0 0 15px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 24px; line-height: 32px; color: #1f2937; font-weight: bold;" class="mobile-h2">
                                    Hello {{from_name}}! 👋
                                </h2>
                                <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #374151;" class="mobile-text">
                                    Thank you for your interest in our professional stucco repair services. We've received your quote request and will contact you within 24 hours.
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Customer Information Card -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 0 30px 20px 30px;" class="mobile-padding-small">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f8fafc; border-left: 4px solid #dc2626; border-radius: 8px;">
                                    <tr>
                                        <td style="padding: 25px;" class="mobile-padding">
                                            <h3 style="margin: 0 0 20px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; line-height: 26px; color: #1f2937; font-weight: bold;" class="mobile-h3">
                                                👤 Customer Information
                                            </h3>
                                            
                                            <!-- Desktop Layout -->
                                            <div class="desktop-only">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tr>
                                                        <td width="30%" style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; vertical-align: top;">
                                                            Name:
                                                        </td>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #1f2937; vertical-align: top;">
                                                            {{from_name}}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; vertical-align: top;">
                                                            Email:
                                                        </td>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #dc2626; vertical-align: top;">
                                                            <a href="mailto:{{from_email}}" style="color: #dc2626; text-decoration: none;">{{from_email}}</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; vertical-align: top;">
                                                            Phone:
                                                        </td>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #1f2937; vertical-align: top;">
                                                            <a href="tel:{{customer_phone}}" style="color: #1f2937; text-decoration: none;">{{customer_phone}}</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; vertical-align: top;">
                                                            Submitted:
                                                        </td>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #1f2937; vertical-align: top;">
                                                            {{timestamp}}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            
                                            <!-- Mobile Layout -->
                                            <div class="mobile-only">
                                                <div style="margin-bottom: 15px;">
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; margin-bottom: 5px;">Name:</div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #1f2937;">{{from_name}}</div>
                                                </div>
                                                <div style="margin-bottom: 15px;">
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; margin-bottom: 5px;">Email:</div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #dc2626;">
                                                        <a href="mailto:{{from_email}}" style="color: #dc2626; text-decoration: none;">{{from_email}}</a>
                                                    </div>
                                                </div>
                                                <div style="margin-bottom: 15px;">
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; margin-bottom: 5px;">Phone:</div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #1f2937;">
                                                        <a href="tel:{{customer_phone}}" style="color: #1f2937; text-decoration: none;">{{customer_phone}}</a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; margin-bottom: 5px;">Submitted:</div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #1f2937;">{{timestamp}}</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Project Details Card -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 0 30px 20px 30px;" class="mobile-padding-small">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f0f9ff; border-left: 4px solid #3b82f6; border-radius: 8px;">
                                    <tr>
                                        <td style="padding: 25px;" class="mobile-padding">
                                            <h3 style="margin: 0 0 20px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; line-height: 26px; color: #1f2937; font-weight: bold;" class="mobile-h3">
                                                📋 Project Details
                                            </h3>
                                            <div style="background: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
                                                <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 15px; line-height: 24px; color: #374151; white-space: pre-wrap;" class="mobile-text">{{message}}</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Photo Attachments Card -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 0 30px 20px 30px;" class="mobile-padding-small">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f0fdf4; border-left: 4px solid #10b981; border-radius: 8px;">
                                    <tr>
                                        <td style="padding: 25px;" class="mobile-padding">
                                            <h3 style="margin: 0 0 20px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; line-height: 26px; color: #1f2937; font-weight: bold;" class="mobile-h3">
                                                📸 Photo Attachments
                                            </h3>
                                            
                                            <!-- Desktop Layout -->
                                            <div class="desktop-only">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tr>
                                                        <td width="40%" style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; vertical-align: top;">
                                                            Close-up Photo:
                                                        </td>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #1f2937; vertical-align: top;">
                                                            {{has_close_up}}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; vertical-align: top;">
                                                            Wide View Photo:
                                                        </td>
                                                        <td style="padding: 8px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #1f2937; vertical-align: top;">
                                                            {{has_far_away}}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            
                                            <!-- Mobile Layout -->
                                            <div class="mobile-only">
                                                <div style="margin-bottom: 15px;">
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; margin-bottom: 5px;">Close-up Photo:</div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #1f2937;">{{has_close_up}}</div>
                                                </div>
                                                <div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #374151; font-weight: bold; margin-bottom: 5px;">Wide View Photo:</div>
                                                    <div style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #1f2937;">{{has_far_away}}</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Call to Action -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 30px; text-align: center; background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); border-radius: 12px; margin: 0 30px;" class="mobile-padding">
                                <h2 style="margin: 0 0 15px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 24px; line-height: 32px; color: #ffffff; font-weight: bold;" class="mobile-h2">
                                    🎯 What Happens Next?
                                </h2>
                                <p style="margin: 0 0 25px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #fecaca;" class="mobile-text">
                                    We'll contact you within 24 hours to discuss your project and provide a detailed quote.
                                </p>
                                
                                <!-- CTA Buttons -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                                    <tr>
                                        <!-- Desktop: Side by side buttons -->
                                        <td class="desktop-only" style="padding-right: 10px;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tr>
                                                    <td style="border-radius: 6px; background: #ffffff;">
                                                        <a href="tel:4162944431" style="background: #ffffff; border: 2px solid #ffffff; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; line-height: 20px; text-decoration: none; padding: 12px 24px; color: #dc2626; display: block; border-radius: 6px; font-weight: bold;">
                                                            📞 Call Now
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td class="desktop-only">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tr>
                                                    <td style="border-radius: 6px; background: transparent; border: 2px solid #ffffff;">
                                                        <a href="mailto:info@stuccorepair.ca" style="background: transparent; border: 2px solid #ffffff; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; line-height: 20px; text-decoration: none; padding: 10px 22px; color: #ffffff; display: block; border-radius: 6px; font-weight: bold;">
                                                            ✉️ Email Us
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        
                                        <!-- Mobile: Stacked buttons -->
                                        <td class="mobile-only" style="width: 100%;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td style="padding-bottom: 15px;">
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                            <tr>
                                                                <td style="border-radius: 6px; background: #ffffff;">
                                                                    <a href="tel:4162944431" style="background: #ffffff; border: 2px solid #ffffff; font-family: 'Segoe UI', Arial, sans-serif; font-size: 18px; line-height: 24px; text-decoration: none; padding: 15px 20px; color: #dc2626; display: block; border-radius: 6px; font-weight: bold; text-align: center; width: 100%;" class="mobile-button">
                                                                        📞 Call (416) 294-4431
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                            <tr>
                                                                <td style="border-radius: 6px; background: transparent; border: 2px solid #ffffff;">
                                                                    <a href="mailto:info@stuccorepair.ca" style="background: transparent; border: 2px solid #ffffff; font-family: 'Segoe UI', Arial, sans-serif; font-size: 18px; line-height: 24px; text-decoration: none; padding: 13px 18px; color: #ffffff; display: block; border-radius: 6px; font-weight: bold; text-align: center; width: 100%;" class="mobile-button">
                                                                        ✉️ Email Us
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                </td>
            </tr>
            
            <!-- Footer -->
            <tr>
                <td style="padding: 0; background-color: #374151;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 40px 30px;" class="mobile-padding">
                                
                                <!-- Company Info -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="text-align: center; padding-bottom: 25px;">
                                            <h4 style="margin: 0 0 10px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; line-height: 26px; color: #ffffff; font-weight: bold;" class="mobile-h3">
                                                StuccoRepair.ca
                                            </h4>
                                            <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #9ca3af;" class="mobile-small">
                                                Professional Stucco Services in the GTA & Surrounding Areas
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Contact Information -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <!-- Desktop: 3 columns -->
                                        <td class="desktop-only" width="33%" style="vertical-align: top; text-align: center; padding: 0 10px;">
                                            <p style="margin: 0 0 5px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #d1d5db; font-weight: bold;">Phone</p>
                                            <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #9ca3af;">
                                                <a href="tel:4162944431" style="color: #9ca3af; text-decoration: none;">(416) 294-4431</a>
                                            </p>
                                        </td>
                                        <td class="desktop-only" width="33%" style="vertical-align: top; text-align: center; padding: 0 10px;">
                                            <p style="margin: 0 0 5px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #d1d5db; font-weight: bold;">Email</p>
                                            <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #9ca3af;">
                                                <a href="mailto:info@stuccorepair.ca" style="color: #9ca3af; text-decoration: none;">info@stuccorepair.ca</a>
                                            </p>
                                        </td>
                                        <td class="desktop-only" width="33%" style="vertical-align: top; text-align: center; padding: 0 10px;">
                                            <p style="margin: 0 0 5px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #d1d5db; font-weight: bold;">Service Area</p>
                                            <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #9ca3af;">GTA & Surrounding Areas</p>
                                        </td>
                                        
                                        <!-- Mobile: Stacked -->
                                        <td class="mobile-only" style="text-align: center;">
                                            <div style="margin-bottom: 15px;">
                                                <p style="margin: 0 0 5px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #d1d5db; font-weight: bold;">Phone</p>
                                                <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #9ca3af;">
                                                    <a href="tel:4162944431" style="color: #9ca3af; text-decoration: none;">(416) 294-4431</a>
                                                </p>
                                            </div>
                                            <div style="margin-bottom: 15px;">
                                                <p style="margin: 0 0 5px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #d1d5db; font-weight: bold;">Email</p>
                                                <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #9ca3af;">
                                                    <a href="mailto:info@stuccorepair.ca" style="color: #9ca3af; text-decoration: none;">info@stuccorepair.ca</a>
                                                </p>
                                            </div>
                                            <div>
                                                <p style="margin: 0 0 5px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #d1d5db; font-weight: bold;">Service Area</p>
                                                <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; color: #9ca3af;">GTA & Surrounding Areas</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Legal Links -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 30px; border-top: 1px solid #4b5563; padding-top: 20px;">
                                    <tr>
                                        <td style="text-align: center;">
                                            <p style="margin: 0 0 10px 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; line-height: 18px; color: #9ca3af;">
                                                <a href="https://stuccorepair.ca/privacy" style="color: #9ca3af; text-decoration: none;">Privacy Policy</a> | 
                                                <a href="https://stuccorepair.ca/terms" style="color: #9ca3af; text-decoration: none;">Terms of Service</a>
                                            </p>
                                            <p style="margin: 0; font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; line-height: 18px; color: #6b7280;">
                                                © 2024 StuccoRepair.ca. All rights reserved. Licensed & Insured.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
        </table>
        
    </center>
</body>
</html>`
  }

  showImplementationSteps() {
    console.log("🚀 EMAILJS IMPLEMENTATION STEPS")
    console.log("=".repeat(60))
    console.log("📧 Ready-to-use email template for EmailJS")
    console.log("🎯 Target: gc.giorno@gmail.com")
    console.log("=".repeat(60))

    console.log("\n📋 STEP 1: CREATE EMAILJS ACCOUNT")
    console.log("-".repeat(40))
    console.log("1. Go to: https://www.emailjs.com/")
    console.log("2. Click 'Sign Up' button")
    console.log("3. Enter email: gc.giorno@gmail.com")
    console.log("4. Create a strong password")
    console.log("5. Verify your email address")
    console.log("6. Complete account setup")

    console.log("\n📧 STEP 2: CONNECT GMAIL SERVICE")
    console.log("-".repeat(40))
    console.log("1. Login to EmailJS dashboard")
    console.log("2. Go to 'Email Services' section")
    console.log("3. Click 'Add New Service'")
    console.log("4. Select 'Gmail' from Personal Services")
    console.log("5. Click 'Connect Account'")
    console.log("6. Authorize EmailJS to access Gmail")
    console.log("7. Set service name: 'StuccoRepair Gmail'")
    console.log("8. Save and copy the Service ID")

    console.log("\n📝 STEP 3: CREATE EMAIL TEMPLATE")
    console.log("-".repeat(40))
    console.log("1. Go to 'Email Templates' section")
    console.log("2. Click 'Create New Template'")
    console.log("3. Select your Gmail service")
    console.log("4. Set template name: 'Stucco Contact Form'")
    console.log("5. Configure template settings:")
    console.log("   • To Email: gc.giorno@gmail.com")
    console.log("   • From Name: {{from_name}}")
    console.log("   • From Email: {{from_email}}")
    console.log("   • Reply To: {{from_email}}")
    console.log("   • Subject: New Stucco Quote Request from {{from_name}}")

    console.log("\n📄 STEP 4: PASTE EMAIL TEMPLATE")
    console.log("-".repeat(40))
    console.log("1. Copy the HTML template code above")
    console.log("2. In EmailJS template editor, switch to 'HTML' view")
    console.log("3. Delete any existing content")
    console.log("4. Paste the complete HTML template")
    console.log("5. Click 'Save' to save the template")
    console.log("6. Copy the Template ID for later use")

    console.log("\n🔑 STEP 5: GET API KEYS")
    console.log("-".repeat(40))
    console.log("1. Go to 'Account' section in dashboard")
    console.log("2. Find 'API Keys' tab")
    console.log("3. Copy the Public Key")
    console.log("4. Save all three IDs securely:")
    console.log("   • Service ID (from step 2)")
    console.log("   • Template ID (from step 4)")
    console.log("   • Public Key (from this step)")

    console.log("\n🧪 STEP 6: TEST THE TEMPLATE")
    console.log("-".repeat(40))
    console.log("1. In EmailJS template editor, click 'Test'")
    console.log("2. Fill in sample data for all variables:")
    console.log("   • from_name: John Smith")
    console.log("   • from_email: john@example.com")
    console.log("   • customer_phone: (416) 555-0123")
    console.log("   • message: Test stucco repair request")
    console.log("   • timestamp: Current date/time")
    console.log("   • has_close_up: Yes - File attached")
    console.log("   • has_far_away: No")
    console.log("   • privacy_consent: Agreed")
    console.log("   • terms_consent: Agreed")
    console.log("3. Click 'Send Test'")
    console.log("4. Check gc.giorno@gmail.com inbox")
    console.log("5. Verify email formatting and links work")

    console.log("\n💻 STEP 7: UPDATE APPLICATION CODE")
    console.log("-".repeat(40))
    console.log("1. Update lib/emailjs-service.ts with your IDs:")
    console.log("   const config = {")
    console.log("     serviceId: 'your_service_id_here',")
    console.log("     templateId: 'your_template_id_here',")
    console.log("     publicKey: 'your_public_key_here'")
    console.log("   }")
    console.log("2. Install EmailJS package if not already installed:")
    console.log("   npm install @emailjs/browser")
    console.log("3. Test the form submission on your website")
    console.log("4. Verify emails are delivered to gc.giorno@gmail.com")

    console.log("\n✅ SUCCESS CHECKLIST")
    console.log("-".repeat(40))
    const checklist = [
      "EmailJS account created with gc.giorno@gmail.com",
      "Gmail service connected and authorized",
      "Email template created with HTML code",
      "Template test email sent and received",
      "Service ID, Template ID, and Public Key obtained",
      "Application code updated with correct IDs",
      "Form submission test completed successfully",
      "Email delivery to gc.giorno@gmail.com confirmed",
    ]

    checklist.forEach((item, index) => {
      console.log(`${index + 1}. ☐ ${item}`)
    })

    console.log("\n🎯 FINAL RESULT")
    console.log("-".repeat(40))
    console.log("✅ Professional responsive email template")
    console.log("✅ StuccoRepair.ca branding and colors")
    console.log("✅ Mobile and desktop optimized")
    console.log("✅ All form data properly displayed")
    console.log("✅ Clear call-to-action buttons")
    console.log("✅ Professional footer with contact info")
    console.log("✅ Compatible with all major email clients")
    console.log("✅ Ready for production use")
  }
}

// Execute the implementation guide
const emailImplementation = new EmailJSImplementation()
emailImplementation.showImplementationSteps()

// Display the template code for easy copying
console.log("\n" + "=".repeat(60))
console.log("📄 COMPLETE EMAIL TEMPLATE CODE")
console.log("=".repeat(60))
console.log("Copy the code below and paste it into EmailJS:")
console.log("-".repeat(60))
console.log(emailImplementation.templateCode)
console.log("-".repeat(60))
console.log("✅ Template ready for EmailJS implementation!")

// Complete EmailJS setup instructions for Gmail integration
class EmailJSSetupInstructions {
  constructor() {
    this.setupSteps = []
  }

  generateSetupGuide() {
    console.log("📧 EMAILJS GMAIL INTEGRATION SETUP GUIDE")
    console.log("=".repeat(60))
    console.log("🎯 Objective: Set up EmailJS with Gmail for StuccoRepair.ca")
    console.log("💰 Cost: FREE (200 emails/month)")
    console.log("📧 Target Email: gc.giorno@gmail.com")
    console.log("=".repeat(60))

    this.step1_CreateAccount()
    this.step2_ConnectGmail()
    this.step3_CreateTemplate()
    this.step4_GetAPIKeys()
    this.step5_UpdateCode()
    this.step6_TestIntegration()
    this.generateEmailTemplate()
    this.provideTroubleshootingTips()
  }

  step1_CreateAccount() {
    console.log("\n1️⃣ CREATE EMAILJS ACCOUNT")
    console.log("-".repeat(40))
    console.log("📝 Instructions:")
    console.log("   1. Go to https://www.emailjs.com/")
    console.log("   2. Click 'Sign Up' button")
    console.log("   3. Choose 'Sign up with Email'")
    console.log("   4. Enter email: gc.giorno@gmail.com")
    console.log("   5. Create a strong password")
    console.log("   6. Verify your email address")
    console.log("   7. Complete account setup")

    console.log("\n✅ Expected Result:")
    console.log("   • EmailJS account created")
    console.log("   • Access to EmailJS dashboard")
    console.log("   • 200 free emails per month")
  }

  step2_ConnectGmail() {
    console.log("\n2️⃣ CONNECT GMAIL SERVICE")
    console.log("-".repeat(40))
    console.log("📝 Instructions:")
    console.log("   1. Login to EmailJS dashboard")
    console.log("   2. Go to 'Email Services' section")
    console.log("   3. Click 'Add New Service'")
    console.log("   4. Select 'Gmail' from Personal Services")
    console.log("   5. Click 'Connect Account'")
    console.log("   6. Authorize EmailJS to access Gmail")
    console.log("   7. Set service name: 'StuccoRepair Gmail'")
    console.log("   8. Save the service configuration")
    console.log("   9. Copy the Service ID (e.g., service_xxxxxxx)")

    console.log("\n✅ Expected Result:")
    console.log("   • Gmail connected to EmailJS")
    console.log("   • Service ID generated")
    console.log("   • Ability to send emails via Gmail")
  }

  step3_CreateTemplate() {
    console.log("\n3️⃣ CREATE EMAIL TEMPLATE")
    console.log("-".repeat(40))
    console.log("📝 Instructions:")
    console.log("   1. Go to 'Email Templates' section")
    console.log("   2. Click 'Create New Template'")
    console.log("   3. Select your Gmail service")
    console.log("   4. Set template name: 'Stucco Repair Contact Form'")
    console.log("   5. Configure template settings:")
    console.log("      • To Email: gc.giorno@gmail.com")
    console.log("      • From Name: {{from_name}}")
    console.log("      • From Email: {{from_email}}")
    console.log("      • Reply To: {{from_email}}")
    console.log("      • Subject: New Stucco Repair Quote Request from {{from_name}}")
    console.log("   6. Use the email template provided below")
    console.log("   7. Test the template")
    console.log("   8. Save and copy Template ID")

    console.log("\n✅ Expected Result:")
    console.log("   • Professional email template created")
    console.log("   • Template ID generated")
    console.log("   • Test email sent successfully")
  }

  step4_GetAPIKeys() {
    console.log("\n4️⃣ GET API KEYS")
    console.log("-".repeat(40))
    console.log("📝 Instructions:")
    console.log("   1. Go to 'Account' section in dashboard")
    console.log("   2. Find 'API Keys' tab")
    console.log("   3. Copy the Public Key")
    console.log("   4. Note down the key securely")
    console.log("   5. Optional: Set up domain restrictions")
    console.log("      • Add your domain for security")
    console.log("      • Leave blank for development")

    console.log("\n✅ Expected Result:")
    console.log("   • Public API key obtained")
    console.log("   • Key ready for integration")
    console.log("   • Optional security configured")
  }

  step5_UpdateCode() {
    console.log("\n5️⃣ UPDATE APPLICATION CODE")
    console.log("-".repeat(40))
    console.log("📝 Instructions:")
    console.log("   1. Install EmailJS package:")
    console.log("      npm install @emailjs/browser")
    console.log("   2. Update lib/emailjs-service.ts with your credentials:")
    console.log("      • serviceId: 'your_service_id'")
    console.log("      • templateId: 'your_template_id'")
    console.log("      • publicKey: 'your_public_key'")
    console.log("   3. Deploy the updated code")

    console.log("\n✅ Expected Result:")
    console.log("   • EmailJS package installed")
    console.log("   • Configuration updated")
    console.log("   • Application ready for testing")
  }

  step6_TestIntegration() {
    console.log("\n6️⃣ TEST INTEGRATION")
    console.log("-".repeat(40))
    console.log("📝 Instructions:")
    console.log("   1. Open your website")
    console.log("   2. Fill out the contact form completely")
    console.log("   3. Click 'Test Email' button first")
    console.log("   4. Check gc.giorno@gmail.com for test email")
    console.log("   5. Submit a real form with all required fields")
    console.log("   6. Verify email delivery")
    console.log("   7. Test form validation with incomplete data")
    console.log("   8. Test file upload functionality")

    console.log("\n✅ Expected Result:")
    console.log("   • Test email received")
    console.log("   • Form submission works")
    console.log("   • Validation prevents errors")
    console.log("   • Professional emails delivered")
  }

  generateEmailTemplate() {
    console.log("\n📧 EMAIL TEMPLATE FOR EMAILJS")
    console.log("-".repeat(50))
    console.log("Copy this HTML template into EmailJS dashboard:")
    console.log("-".repeat(50))

    const template = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Quote Request - StuccoRepair.ca</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc2626, #991b1b); padding: 30px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
                New Quote Request
            </h1>
            <p style="color: #fecaca; margin: 10px 0 0 0; font-size: 16px;">
                StuccoRepair.ca Professional Services
            </p>
        </div>

        <!-- Customer Information -->
        <div style="padding: 30px;">
            <div style="background: #f8fafc; border-left: 4px solid #dc2626; padding: 20px; margin-bottom: 20px;">
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">
                    👤 Customer Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold; width: 30%;">Name:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{from_name}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold;">Email:</td>
                        <td style="padding: 8px 0; color: #dc2626;">{{from_email}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold;">Phone:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{customer_phone}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold;">Submitted:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{timestamp}}</td>
                    </tr>
                </table>
            </div>

            <!-- Project Details -->
            <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 20px;">
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">
                    📋 Project Details
                </h2>
                <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
                    <p style="line-height: 1.6; color: #374151; margin: 0; white-space: pre-wrap;">{{message}}</p>
                </div>
            </div>

            <!-- Photo Attachments -->
            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 20px;">
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">
                    📸 Photo Attachments
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold; width: 40%;">Close-up Photo:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{has_close_up}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold;">Wide View Photo:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{has_far_away}}</td>
                    </tr>
                </table>
            </div>

            <!-- Consent Information -->
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin-bottom: 20px;">
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">
                    ✅ Consent & Agreements
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold; width: 40%;">Privacy Policy:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{privacy_consent}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #374151; font-weight: bold;">Terms of Service:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{terms_consent}}</td>
                    </tr>
                </table>
            </div>

            <!-- Next Steps -->
            <div style="background: #dc2626; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
                <h2 style="margin: 0 0 10px 0; font-size: 18px;">🎯 Next Steps</h2>
                <p style="margin: 0; font-size: 16px; line-height: 1.5;">
                    Contact this customer within 24 hours as promised.<br>
                    Call {{customer_phone}} or reply to {{from_email}}
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background: #374151; color: #9ca3af; padding: 20px; text-align: center;">
            <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold; color: white;">StuccoRepair.ca</p>
            <p style="margin: 0 0 10px 0; font-size: 14px;">Professional Stucco Services in the GTA</p>
            <p style="margin: 0; font-size: 12px;">
                Phone: {{business_phone}} | Email: {{business_email}} | Service Area: {{service_area}}
            </p>
        </div>

    </div>
</body>
</html>
    `

    console.log(template)
    console.log("-".repeat(50))

    console.log("\n📋 Template Variables Used:")
    console.log("   • {{from_name}} - Customer name")
    console.log("   • {{from_email}} - Customer email")
    console.log("   • {{customer_phone}} - Customer phone number")
    console.log("   • {{message}} - Project information")
    console.log("   • {{timestamp}} - Submission time")
    console.log("   • {{has_close_up}} - Close-up photo status")
    console.log("   • {{has_far_away}} - Far-away photo status")
    console.log("   • {{privacy_consent}} - Privacy policy agreement")
    console.log("   • {{terms_consent}} - Terms of service agreement")
    console.log("   • {{business_phone}} - Your business phone")
    console.log("   • {{business_email}} - Your business email")
    console.log("   • {{service_area}} - Your service area")
  }

  provideTroubleshootingTips() {
    console.log("\n🔧 TROUBLESHOOTING TIPS")
    console.log("-".repeat(40))

    const troubleshootingTips = [
      {
        issue: "Emails not being received",
        solutions: [
          "Check spam/junk folder in Gmail",
          "Verify template recipient email is correct",
          "Test template directly in EmailJS dashboard",
          "Check Gmail filters and blocked senders",
        ],
      },
      {
        issue: "Form submission errors",
        solutions: [
          "Verify all API keys are correct",
          "Check browser console for JavaScript errors",
          "Ensure all required fields are filled",
          "Test with different browsers",
        ],
      },
      {
        issue: "Template variables not working",
        solutions: [
          "Use double curly braces: {{variable_name}}",
          "Match variable names exactly in code and template",
          "Test template with sample data in dashboard",
          "Check for typos in variable names",
        ],
      },
      {
        issue: "File uploads not mentioned in emails",
        solutions: [
          "EmailJS doesn't support file attachments directly",
          "Files are indicated as 'Yes/No' in email",
          "Consider using cloud storage links for files",
          "Mention file upload status in project description",
        ],
      },
    ]

    troubleshootingTips.forEach((tip, index) => {
      console.log(`\n${index + 1}. ${tip.issue}`)
      console.log("   Solutions:")
      tip.solutions.forEach((solution) => {
        console.log(`     • ${solution}`)
      })
    })
  }

  generateConfigurationExample() {
    console.log("\n💻 CONFIGURATION EXAMPLE")
    console.log("-".repeat(40))
    console.log("Update lib/emailjs-service.ts with your actual values:")
    console.log("")

    const configExample = `
// Replace these with your actual EmailJS values
const config = {
  serviceId: 'service_abc123',        // Your Gmail service ID
  templateId: 'template_xyz789',      // Your template ID  
  publicKey: 'user_def456ghi789',     // Your public key
}

// Example of what the values look like:
const exampleConfig = {
  serviceId: 'service_stucco_gmail',
  templateId: 'template_contact_form', 
  publicKey: 'user_1a2b3c4d5e6f7g8h',
}
    `

    console.log(configExample)
  }

  generateFinalChecklist() {
    console.log("\n✅ FINAL SETUP CHECKLIST")
    console.log("-".repeat(40))

    const checklist = [
      "EmailJS account created with gc.giorno@gmail.com",
      "Gmail service connected and authorized",
      "Email template created with professional design",
      "API keys obtained and secured",
      "Application code updated with credentials",
      "npm install @emailjs/browser completed",
      "Test email sent and received successfully",
      "Form validation working for all required fields",
      "Phone number formatting working correctly",
      "Privacy policy and terms of service accessible",
      "File upload UI functional (status reported in email)",
      "Responsive design tested on mobile devices",
      "Analytics tracking configured (optional)",
      "Production deployment completed",
    ]

    checklist.forEach((item, index) => {
      console.log(`   ${index + 1}. ☐ ${item}`)
    })

    console.log("\n🎯 SUCCESS CRITERIA:")
    console.log("   • Form submissions send professional emails to gc.giorno@gmail.com")
    console.log("   • All required fields validated before submission")
    console.log("   • Phone numbers formatted correctly")
    console.log("   • Privacy and terms compliance implemented")
    console.log("   • 24-hour response promise clearly communicated")
    console.log("   • Mobile-responsive design working perfectly")
  }
}

// Execute setup instructions
function generateEmailJSInstructions() {
  const instructions = new EmailJSSetupInstructions()
  instructions.generateSetupGuide()
  instructions.generateConfigurationExample()
  instructions.generateFinalChecklist()

  console.log("\n🚀 READY TO IMPLEMENT!")
  console.log("Follow the steps above to set up EmailJS with Gmail.")
  console.log("The enhanced form includes all requested features:")
  console.log("• Phone number field with formatting")
  console.log("• All fields mandatory with validation")
  console.log("• Privacy policy and terms of service")
  console.log("• Responsive design")
  console.log("• Professional email templates")
  console.log("• Analytics tracking capability")
}

if (require.main === module) {
  generateEmailJSInstructions()
}

module.exports = { EmailJSSetupInstructions }
