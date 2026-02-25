import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

function validateForm(data: ContactFormData) {
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!data.projectType) {
        errors.projectType = "Please select a project type.";
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.message = "Message must be at least 10 characters.";
    }

    return errors;
}

const smtpPort = Number(process.env.SMTP_PORT) || 587;

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465 (SSL), false for 587 (TLS)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();
        const errors = validateForm(body);

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { success: false, errors },
                { status: 400 }
            );
        }

        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@anthembyte.com";

        // Send email via Nodemailer
        await transporter.sendMail({
            from: `"AnthemByte Contact Form" <${process.env.SMTP_USER}>`,
            to: receiverEmail,
            replyTo: body.email,
            subject: `[New Inquiry] ${body.projectType} — from ${body.name}`,
            text: `
Name: ${body.name}
Email: ${body.email}
Project Type: ${body.projectType}

Message:
${body.message}

---
Sent from AnthemByte contact form at ${new Date().toISOString()}
            `.trim(),
            html: `
<div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; border: 3px solid #000; padding: 0;">
    <div style="background-color: #084C61; color: #fff; padding: 24px 32px;">
        <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">NEW INQUIRY</h1>
        <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.8;">${body.projectType}</p>
    </div>
    <div style="padding: 32px; background: #fff;">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px; vertical-align: top;">NAME</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.name}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">EMAIL</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${body.email}" style="color: #DB504A;">${body.email}</a></td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">TYPE</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.projectType}</td>
            </tr>
        </table>
        <div style="margin-top: 24px;">
            <p style="font-weight: bold; margin-bottom: 8px;">MESSAGE</p>
            <div style="background: #f5f5f5; border-left: 4px solid #DB504A; padding: 16px; white-space: pre-wrap;">${body.message}</div>
        </div>
    </div>
    <div style="background: #f5f5f5; padding: 16px 32px; font-size: 12px; color: #999; border-top: 2px solid #000;">
        Sent via AnthemByte Contact Form • ${new Date().toLocaleString()}
    </div>
</div>
            `.trim(),
        });

        // Also log to console as backup
        console.log("📬 Contact Form Submission:", {
            name: body.name,
            email: body.email,
            projectType: body.projectType,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been received. We'll get back to you shortly!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
