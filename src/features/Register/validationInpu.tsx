import { z } from "zod";

const RigsterSchema = z.object({
  UserName: z.string().regex(/^[0-9a-zA-Z_@-]{3,30}$/),
  Email: z.string().regex(/.+@gmail\.com$/, "يجب أن يكون البريد gmail"),
  Password: z
    .string()
    .min(8, "")
    .regex(/[A-Z]/, "")
    .regex(/[a-z]/, "")
    .regex(/[0-9]/, ""),
});

type RegisterFormInputs = z.infer<typeof RigsterSchema>;

export { RigsterSchema };
export type { RegisterFormInputs };
