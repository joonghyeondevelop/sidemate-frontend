import type { ladingProps } from "../types/LandingTypes";
import Button from "../../../shared/ui/Button";

const LandingTopbar = ({ page }: ladingProps) => {
  return (
    <div className="w-full h-16 p-2.5 bg-slate-100 flex justify-between items-center">
      <div className="flex align-middle">Sidemate</div>
      <div>
        <Button
          size={"sm"}
          content="로그인"
          onClick={page}
          buttonType="button"
        />
      </div>
    </div>
  );
};

export default LandingTopbar;
