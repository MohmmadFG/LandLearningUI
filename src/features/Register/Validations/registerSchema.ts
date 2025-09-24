import { z } from "zod";

const RegisterSchema = z.object({
  UserName: z
    .string()
    .nonempty("Username is required")
    .regex(
      /^[0-9a-zA-Z_@-]{6,30}$/,
      "Username must be 6-30 chars, only letters, numbers, _ @ -"
    ),

  Email: z
    .string()
    .nonempty()
    .regex(/.+@gmail\.com$/, "يجب أن يكون البريد gmail")
    .nonoptional(),
  Password: z
    .string()
    .nonempty()
    .min(8, "")
    .regex(/[A-Z]/, "")
    .regex(/[a-z]/, "")
    .regex(/[0-9]/, "")
    .nonoptional(),
});

type RegisterFormInputs = z.infer<typeof RegisterSchema>;

export { RegisterSchema };
export type { RegisterFormInputs };
