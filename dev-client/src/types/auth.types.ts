import { z } from "zod";
import { loginSchema, signUpSchema } from "../validation/auth.validations";

export type ISignUpInput = z.infer<typeof signUpSchema>
export type ILoginInput = z.infer<typeof loginSchema>