import Button from "../../../shared/ui/Button";
import type { ladingProps } from "../types/LandingTypes";

const LadingCenter = ({ page }: ladingProps) => {
  return (
    <div className="h-screen flex justify-center flex-col items-center gap-5">
      <p className="font-extrabold text-5xl">
        사이드 프로젝트 팀 빌딩을 더 쉽게
      </p>
      <p className="font-medium text-base">
        프로젝트를 만들고 팀원을 모집하고 지원부터 승인까지 한 곳에서
        관리하세요.
      </p>
      <div>
        <Button weight={35} height={10} content="시작하기" onClick={page} />
      </div>
    </div>
  );
};

export default LadingCenter;
