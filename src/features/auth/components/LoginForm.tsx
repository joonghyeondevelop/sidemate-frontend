import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";
import usePageMove from "../../../shared/hooks/usePageMove";
import { loginSchema, type LoginFormSchemaType } from "../schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const { moveSingup } = usePageMove();

  const onSubmit = (data: LoginFormSchemaType) => {
    console.log("로그인 데이터", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div>
      <div className="w-96 h-96 bg-slate-100 shadow-sm border border-slate-50 rounded-2xl p-4 font-bold text-xl flex flex-col items-center">
        로그인
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full h-full justify-center"
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
              placeholder="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <p className="text-sm font-light text-slate-500 hover:underline mt-0.5">
            비밀번호를 잊으셨나요?
          </p>
          <Button
            content="로그인하기"
            size="full"
            buttonType="submit"
            onClick={() => console.log("로그인하기")}
          />
        </form>
      </div>

      <div
        className="w-40 text-sm font-light text-slate-500 hover:underline mt-3"
        onClick={moveSingup}
      >
        처음이신가요? 회원가입
      </div>
    </div>
  );
};

export default LoginForm;
