import { z } from "zod";

export type LoginFormSchemaType = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(6, "비밀번호는 최소 6자 입니다."),
});
