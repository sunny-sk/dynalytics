import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  companyName: z.string().min(3, "Name must be at least 3 characters long"),
  desc: z.string().min(3, "Name must be at least 3 characters long"),
});
