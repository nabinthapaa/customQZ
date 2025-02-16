import { LoginSchema, RegisterSchema } from "@/schema";
import { z } from "zod";

export type ILogin = z.infer<typeof LoginSchema>;
export type IRegister = z.infer<typeof RegisterSchema>;
