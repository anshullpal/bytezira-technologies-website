import { z } from "zod";
export const enquiryTypes = ["AI and Machine Learning", "Software Development", "Cloud and DevOps", "Cybersecurity", "Networking and Infrastructure", "Technical Consulting", "Content Writing and Digital Marketing", "Research Collaboration", "Other"] as const;
const opt = (n: number) => z.string().trim().max(n).optional();
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  organisation: opt(120),
  type: z.enum(enquiryTypes, { message: "Choose an enquiry type." }),
  subject: z.string().trim().min(3, "Enter a subject.").max(150),
  message: z.string().trim().min(20, "Describe your project in at least 20 characters.").max(4000),
  budget: opt(60),
  timeline: opt(60),
  consent: z.literal(true, { message: "Please acknowledge the privacy notice." }),
  website: z.string().max(0).optional(), // honeypot: must stay empty
});
export type ContactInput = z.infer<typeof contactSchema>;
