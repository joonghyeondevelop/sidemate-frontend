import { useQuery } from "@tanstack/react-query";
import { getMe } from "../features/auth/api/auth";
import { useAuthStore } from "../features/auth/store/auth.store";
import { useEffect } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const { data: user, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!localStorage.getItem("accessToken"),
  });

  useEffect(() => {
    if (user) {
      setAuth(user);
    }
  }, [user, setAuth]);

  useEffect(() => {
    if (isError) {
      clearAuth();
    }
  }, [isError]);

  return <>{children}</>;
};
