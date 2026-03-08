import { useMutation } from "@tanstack/react-query";
import { login, type LoginDto } from "./auth";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "react-router-dom";

export const useLoginMutation = () => {
  return useMutation<any, AxiosError<ErrorResponse>, LoginDto>({
    mutationFn: login,
  });
};
