import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { restaurantName, contactPerson, email, phone, message } = body;

    // Validate required fields
    if (!restaurantName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Supra Contact Form <noreply@supra-booking.com>',
      to: ['support@supra-booking.com'],
      replyTo: email,
      subject: `New Restaurant Application: ${restaurantName}`,
      html: `
        <h2>New Restaurant Application</h2>
        <p><strong>Restaurant Name:</strong> ${restaurantName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from Supra Landing Page Contact Form</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

