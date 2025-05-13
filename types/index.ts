import { formSchema } from "@/lib/validation";
import { z } from "zod";

export type UserFormData = z.infer<typeof formSchema>;