import { NextRequest, NextResponse } from 'next/server';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 2000;

type ContactPayload = {
  restaurantName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  message?: string;
  botcheck?: boolean | string;
};

function trimField(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body.botcheck) {
      return NextResponse.json({ message: 'Submission received' }, { status: 200 });
    }

    const restaurantName = trimField(body.restaurantName, MAX_FIELD_LENGTH);
    const contactPerson = trimField(body.contactPerson, MAX_FIELD_LENGTH);
    const email = trimField(body.email, MAX_FIELD_LENGTH);
    const phone = trimField(body.phone, MAX_FIELD_LENGTH);
    const message = trimField(body.message, MAX_MESSAGE_LENGTH);

    if (!restaurantName || !contactPerson || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not configured');
      return NextResponse.json({ error: 'Contact form is not configured' }, { status: 500 });
    }

    const response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Restaurant Application: ${restaurantName}`,
        from_name: contactPerson,
        name: contactPerson,
        email,
        phone,
        restaurant_name: restaurantName,
        message: message || 'No message provided.',
        replyto: email,
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !data.success) {
      console.error('Web3Forms error:', data);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Submission received' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
