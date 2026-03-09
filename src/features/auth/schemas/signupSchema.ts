import { z } from "zod";

export type signUpSchemaType = z.infer<typeof signupSchema>;

export const signupSchema = z
  .object({
    email: z.string().email("올바른 이메일 형식이 아닙니다."),
    password: z.string().min(6, "비밀번호는 최소 6자 입니다."),
    passwordConfirm: z.string().min(6, "비밀번호 확인을 입력해주세요."),
    name: z.string().min(2, "이름은 최소 2자입니다."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });
