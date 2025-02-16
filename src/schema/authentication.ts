import { z } from "zod";

const AuthSchema = z.object({
  email: z.string().email("Email is not valid").toLowerCase(),
  username: z.string().min(5, "Username must be at least 5 character long"),
  password: z.string().min(10, "Password must be at least 10 character long"),
  confirmPassword: z
    .string()
    .min(10, "Password must be at least 10 character long"),
});

export const RegisterSchema = AuthSchema.strip().refine(
  ({ password, confirmPassword }) => {
    return password === confirmPassword;
  },
  () => ({
    path: ["confirmPassword"],
    message: "Password did not match",
  }),
);

export const LoginSchema = AuthSchema.pick({
  username: true,
  password: true,
}).strip();
