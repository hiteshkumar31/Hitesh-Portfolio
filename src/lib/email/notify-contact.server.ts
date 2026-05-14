// Server-only helper that enqueues a contact-form notification email
// to the portfolio owner. Safe no-op if the email queue isn't ready yet.
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const OWNER_EMAIL = "khitesh07ml@gmail.com";

interface ContactPayload {
  id: string;
  name: string;
  email: string;
  message: string;
}

export async function sendContactNotification(p: ContactPayload) {
  // Try to enqueue via the Lovable Email queue. If the RPC doesn't exist
  // yet (email infra not set up), this throws and the caller logs it.
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#ffffff;color:#111">
      <h2 style="margin:0 0 16px;font-size:20px">New portfolio message</h2>
      <p style="margin:0 0 8px"><strong>From:</strong> ${escape(p.name)} &lt;${escape(p.email)}&gt;</p>
      <p style="margin:0 0 16px;color:#666;font-size:12px">Submission ID: ${p.id}</p>
      <div style="padding:16px;background:#f5f5f7;border-radius:8px;white-space:pre-wrap;line-height:1.5">${escape(p.message)}</div>
    </div>`;

  const subject = `Portfolio: new message from ${p.name}`;

  const { error } = await supabaseAdmin.rpc("enqueue_email" as never, {
    queue_name: "transactional_emails",
    payload: {
      to: OWNER_EMAIL,
      reply_to: p.email,
      subject,
      html,
      template_name: "contact-notification",
    },
  } as never);

  if (error) throw error;
}
