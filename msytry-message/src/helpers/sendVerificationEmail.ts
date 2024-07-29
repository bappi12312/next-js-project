import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVrificationEmail(email: string, username: string, verifyCode: string) : Promise<ApiResponse> {
try {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'verfication message | verification code',
    react: VerificationEmail({username, otp: verifyCode}),
  });

  return {success: true, message: ' send verification email successfully'}
} catch (error) {
  console.error("error sending verification email", error)
  return {success: false, message: 'failsed to send verification email'}
}
}
