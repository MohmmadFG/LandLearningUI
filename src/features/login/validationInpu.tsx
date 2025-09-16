import { z } from "zod";

const loginSchema = z.object({
  email: z.string().regex(/.+@gmail\.com$/, "يجب أن يكون البريد gmail"),
  password: z
    .string()
    .min(8, "")
    .regex(/[A-Z]/, "")
    .regex(/[a-z]/, "")
    .regex(/[0-9]/, ""),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export { loginSchema };
export type { LoginFormInputs };
