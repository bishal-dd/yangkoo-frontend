import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const contact = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: "5b322958-8d92-423c-b1da-05244a576f11",
    });
    return Response.json(contact);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
