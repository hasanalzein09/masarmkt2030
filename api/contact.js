import nodemailer from 'nodemailer';

export const config = {
    runtime: 'nodejs',
};

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, phone, email, company, service, city, message, budget, source } = req.body;

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-right: 4px solid #7c3aed; }
          .field-label { font-weight: bold; color: #374151; margin-bottom: 5px; font-size: 14px; }
          .field-value { color: #1f2937; font-size: 16px; }
          .message-box { background: #ede9fe; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 طلب استشارة جديد</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">مسار للتسويق 2030</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">👤 الاسم</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">📱 الهاتف</div>
              <div class="field-value" dir="ltr">${phone}</div>
            </div>
            ${email ? `
            <div class="field">
              <div class="field-label">📧 البريد الإلكتروني</div>
              <div class="field-value" dir="ltr">${email}</div>
            </div>
            ` : ''}
            ${company ? `
            <div class="field">
              <div class="field-label">🏢 الشركة</div>
              <div class="field-value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="field-label">💼 الخدمة المطلوبة</div>
              <div class="field-value">${service}</div>
            </div>
            <div class="field">
              <div class="field-label">📍 المدينة</div>
              <div class="field-value">${city}</div>
            </div>
            ${budget ? `
            <div class="field">
              <div class="field-label">💰 الميزانية</div>
              <div class="field-value">${budget}</div>
            </div>
            ` : ''}
            <div class="message-box">
              <div class="field-label">📝 تفاصيل المشروع</div>
              <div class="field-value" style="white-space: pre-wrap; margin-top: 10px;">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>المصدر: ${source}</p>
            <p>تم الإرسال من موقع masarmkt2030.online</p>
          </div>
        </div>
      </body>
      </html>
    `;

        // Send email
        await transporter.sendMail({
            from: `"مسار للتسويق 2030" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `🚀 طلب جديد من ${name} - ${service}`,
            html: htmlContent,
            replyTo: email || undefined,
        });

        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}
