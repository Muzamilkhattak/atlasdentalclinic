import { z } from "zod";

const phoneRegex = /^\+?[0-9()\-\s]{10,20}$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number"),
  subject: z.string().trim().min(2, "Subject is required").max(120, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
