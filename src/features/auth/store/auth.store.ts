import { create } from "zustand";

export interface User {
  id: number;
  email: string;
  name: string;
}

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
  setAuth: (user: User) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,

  setAuth: (user) =>
    set({
      user,
      isLoggedIn: true,
    }),

  clearAuth: () =>
    set({
      user: null,
      isLoggedIn: false,
    }),
}));
