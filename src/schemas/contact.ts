import { z } from "zod";

export const CONTACT_TOPICS = ["therapie", "mma", "sonstiges"] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

/**
 * Server-side schema: constraints are authoritative here, messages are
 * generic since they're only surfaced in logs, not to the end user (the
 * client always validates first with locale-aware messages).
 */
export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().max(30).optional().or(z.literal("")),
  topic: z.enum(CONTACT_TOPICS),
  message: z.string().min(10).max(2000),
  locale: z.enum(["de", "en"]),
  // Honeypot anti-spam field: must stay empty for a legitimate submission.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactValidationMessages = {
  nameMin: string;
  emailInvalid: string;
  messageMin: string;
  messageMax: string;
};

/**
 * Client-side schema factory: same constraints as `contactSchema`, but
 * with locale-aware messages so react-hook-form surfaces translated
 * inline errors.
 */
export function createLocalizedContactSchema(
  messages: ContactValidationMessages,
) {
  return z.object({
    name: z.string().min(2, messages.nameMin).max(100),
    email: z.email(messages.emailInvalid).max(200),
    phone: z.string().max(30).optional().or(z.literal("")),
    topic: z.enum(CONTACT_TOPICS),
    message: z
      .string()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
    locale: z.enum(["de", "en"]),
    company: z.string().max(0).optional().or(z.literal("")),
  });
}
