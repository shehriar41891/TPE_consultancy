import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Inquiry = InsertInquiry & {
  id: number;
  createdAt: Date;
};
