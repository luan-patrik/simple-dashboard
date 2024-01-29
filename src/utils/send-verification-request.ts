import { MagicLinkEmail } from "@/components/emails";
import { resend } from "@/lib/resend";
import { SendVerificationRequestParams } from "next-auth/providers/email";

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
) => {
  const { url, identifier } = params;
  const { host } = new URL(params.url);

  try {
    await resend.emails.send({
      from: "Luan Patrik <onboarding@resend.dev>",
      to: identifier,
      subject: `Magic Link de ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host }),
    });
  } catch (error) {
    throw new Error("Failed to send the verification Email.");
  }
};

function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
