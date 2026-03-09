import { useMutation } from "@tanstack/react-query";
import { signup, type SingupDto } from "./auth";
import type { ErrorResponse } from "react-router-dom";
import type { AxiosError } from "axios";

export const useSignUpMutation = () => {
  return useMutation<any, AxiosError<ErrorResponse>, SingupDto>({
    mutationFn: signup,
  });
};
