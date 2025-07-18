// test-email.js - Run this to test your SMTP connection
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing SMTP connection...');
  console.log('SMTP User:', process.env.BREVO_SMTP_USER);
  console.log('From Email:', process.env.EMAIL_FROM);
  
  const transporter = nodemailer.createTransporter({
    host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_PASS,
    },
  });

  try {
    // Test connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Test Email from Stucco Repair',
      text: 'This is a test email to verify SMTP is working.',
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);
  }
}

testEmail(); 