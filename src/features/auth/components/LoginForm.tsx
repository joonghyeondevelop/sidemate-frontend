import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";

const LoginForm = () => {
  return (
    <div className="w-96 h-96 bg-slate-100 shadow-sm border border-slate-50 rounded-2xl p-4 font-bold text-xl flex flex-col items-center">
      로그인
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex flex-col w-full gap-2.5">
          <Input
            labelContent="이메일"
            inputType="email"
            placeholder="abc@example.com"
          />
          <Input
            labelContent="비밀번호"
            inputType="password"
            placeholder="password"
          />
        </div>
        <p className="text-sm font-light text-slate-500 hover:underline mt-0.5">
          비밀번호를 잊으셨나요?
        </p>
      </div>
      <Button
        content="로그인하기"
        weight={"full"}
        height={16}
        onClick={() => console.log("로그인하기")}
      />
    </div>
  );
};

export default LoginForm;
