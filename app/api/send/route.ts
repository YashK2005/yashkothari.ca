import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'yashkoth7@gmail.com',
      subject: `New message from ${name} on your portfolio`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 
