import { api } from "../../../shared/api/axios";

export interface LoginDto {
  email: string;
  password: string;
}

export interface SingupDto {
  email: string;
  password: string;
  name: string;
}

export const login = async (userData: LoginDto) => {
  try {
    const res = await api.post("/auth/login", userData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (userData: SingupDto) => {
  try {
    const res = await api.post("/auth/signup", userData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async () => {
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch (error) {
    throw error;
  }
};
