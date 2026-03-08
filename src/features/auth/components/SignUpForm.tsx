import { useForm } from "react-hook-form";
import usePageMove from "../../../shared/hooks/usePageMove";
import { signupSchema, type signUpSchemaType } from "../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

const SignUpForm = () => {
  const { moveLogin } = usePageMove();

  const onSubmit = (data: signUpSchemaType) => {
    console.log("회원가입 데이터", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <div className="w-96 h-auto bg-slate-100 shadow-sm border border-slate-50 rounded-2xl p-4 font-bold text-xl flex flex-col items-center">
      회원가입
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full h-full justify-center gap-10"
      >
        <div className="flex flex-col w-full gap-2.5">
          <Input
            labelContent="이메일"
            inputType="email"
            placeholder="abc@example.com"
            {...register("email")}
          />
          <Input
            labelContent="비밀번호"
            inputType="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
          <Input
            labelContent="비밀번호 확인"
            inputType="password"
            placeholder="비밀번호를 재입력해주세요."
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-xs">
              {errors.passwordConfirm.message}
            </p>
          )}
          <Input
            labelContent="이름"
            inputType="name"
            placeholder="이름 최소 2자이상"
            {...register("name")}
          />
        </div>
        <Button
          content="회원가입하기"
          size="full"
          buttonType="submit"
          onClick={moveLogin}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
