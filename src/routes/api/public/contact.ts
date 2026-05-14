import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
        }

        const { name, email, message } = parsed.data;

        const { data, error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({ name, email, message })
          .select("id")
          .single();

        if (error) {
          console.error("contact_submissions insert failed:", error);
          return Response.json({ error: "Failed to save message" }, { status: 500 });
        }

        // Forward to inbox via the transactional email pipeline (best-effort).
        try {
          const { sendContactNotification } = await import("@/lib/email/notify-contact.server");
          await sendContactNotification({ id: data.id, name, email, message });
        } catch (e) {
          console.error("contact email forward failed (non-fatal):", e);
        }

        return Response.json({ success: true, id: data.id });
      },
    },
  },
});
