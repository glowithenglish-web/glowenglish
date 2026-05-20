import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const driveLink = process.env.GOOGLE_DRIVE_LINK;

    if (!gmailUser || !gmailPass) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD in environment variables");
      return Response.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Verify connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return Response.json(
        { error: "Email service connection failed. Please try again later." },
        { status: 500 }
      );
    }

    // Send email
    const info = await transporter.sendMail({
      from: `"GLOW English" <${gmailUser}>`,
      to: email,
      subject: "🎉 Your GLOW English Materials Are Ready!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fffaf7; padding: 40px 30px; border-radius: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #e8a0b4; font-size: 28px; margin: 0;">✨ GLOW English</h1>
            <p style="color: #999; font-size: 14px; margin-top: 5px;">Growing Language Opportunities Worldwide</p>
          </div>
          
          <div style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <h2 style="color: #2d2d2d; font-size: 22px; margin-top: 0;">Welcome to GLOW! 🎉</h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Thank you for signing up! We're excited to help your child learn English in a fun and engaging way.
            </p>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Here's your access link to all the learning materials:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${driveLink}" 
                 style="background-color: #e8a0b4; color: white; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">
                📂 Access Materials on Google Drive
              </a>
            </div>
            
            <div style="background: #fde8ee; border-radius: 12px; padding: 20px; margin-top: 20px;">
              <p style="color: #2d2d2d; font-weight: bold; margin-top: 0; font-size: 14px;">What's inside:</p>
              <ul style="color: #555; font-size: 14px; line-height: 1.8; padding-left: 20px;">
                <li>📊 Vocabulary PPT — themed presentations with visuals</li>
                <li>📐 Grammar PPT — simple explanations for beginners</li>
                <li>🎬 Pronunciation Videos — learn correct pronunciation</li>
                <li>🗣️ Daily Vocabulary Videos — everyday words + pronunciation</li>
                <li>🎯 Quiz & Practice PPT — interactive exercises</li>
              </ul>
            </div>
            
            <p style="color: #555; font-size: 14px; line-height: 1.6; margin-top: 20px;">
              Feel free to download, share with your child, and enjoy learning together!
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #f8c8d4;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Follow us on Instagram: <a href="https://instagram.com/learn.grow_glow" style="color: #e8a0b4;">@learn.grow_glow</a>
            </p>
            <p style="color: #bbb; font-size: 11px; margin-top: 10px;">
              © 2025 GLOW English. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", info.messageId);
    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
