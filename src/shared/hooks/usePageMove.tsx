import { useLocation, useNavigate } from "react-router-dom";

const getActivePageFromPath = (path: string) => {
  if (path.startsWith("/")) return "LANDING";
  if (path.startsWith("/login")) return "LOGIN";
  if (path.startsWith("/signup")) return "SIGNUP";
  if (path.startsWith("/projects")) return "PROJECT";

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
    moveHome: () => nav("/projects"),
  };
};

export default usePageMove;
