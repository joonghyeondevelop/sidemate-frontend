import { useLocation, useNavigate } from "react-router-dom";

const getActivePageFromPath = (path: string) => {
  if (path.startsWith("/")) return "LANDING";
  if (path.startsWith("/login")) return "LOGIN";
  if (path.startsWith("/signup")) return "SIGNUP";

  return "LANDING";
};

const usePageMove = () => {
  const nav = useNavigate();
  const location = useLocation();

  const activePage = getActivePageFromPath(location.pathname);

  return {
    activePage,
    moveLogin: () => nav("/login"),
    moveSingup: () => nav("/signup"),
  };
};

export default usePageMove;
