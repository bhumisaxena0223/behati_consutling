import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET(request: Request) {
  // simple health‐check, or return whatever you need
  return NextResponse.json({ message: 'Contact API is alive' });
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'All fields are required.' }),
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <bhumisaxena0223@gmail.com>',
      to: 'bhumisaxena0223@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>`
    });

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully.' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again later.' }), { status: 500 });
  }
}
