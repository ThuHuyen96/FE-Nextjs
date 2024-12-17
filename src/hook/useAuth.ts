import { AuthApi } from "@/api/AuthApi"
import { IUserLogin, IUserRegister, IUserUpdateParams } from "@/type/User"
import { useMutation, useQuery } from "@tanstack/react-query"
import { message } from "antd"

export const useCreateAccount = () => {
  return useMutation({
    mutationKey: ["auth.register"],
    mutationFn: (data: IUserRegister) => AuthApi.register(data),
    onError: (errors: any) => {
      message.error(errors?.response?.data?.message || "Thất bại")
    },
  })
}

export const useLogin = () => {
  return useMutation({
    mutationKey: ["auth.login"],
    mutationFn: (data: IUserLogin) => AuthApi.login(data),
    onError: (errors: any) => {
      message.error(errors?.response?.data?.message || "Thất bại")
    },
  })
}

export const useGetProfile = (token: string, enabled: boolean) =>
  useQuery({
    queryKey: ["auth.profile", token],
    queryFn: async (): Promise<any> => {
      const res = await AuthApi.profile(token)
      return res.data
    },
    enabled,
  })

export const useResendOtp = () => {
  return useMutation({
    mutationKey: ["auth.resent_otp"],
    mutationFn: (params: { email: string, type: "REGISTER" | "FORGET_PASSWORD" }) => AuthApi.resendOtp(params),
  })
}

export const useVerifyOtp = () => {
  return useMutation({
    mutationKey: ["auth.verify_otp"],
    mutationFn: (params: { email: string; otpCode: string, type: "REGISTER" | "FORGET_PASSWORD" }) => AuthApi.verifyOtp(params),
  })
}

export const useForgetPassword = () => {
  return useMutation({
    mutationKey: ["auth.forget_password"],
    mutationFn: (params: { email: string }) => AuthApi.forgetPassword(params),
  })
}

export const useResetPassword = () => {
  return useMutation({
    mutationKey: ["auth.reset_password"],
    mutationFn: (params: { email: string, otpCode: string, password: string }) => AuthApi.resetPassword(params),
  })
}

export const useLogout = (enabled: boolean) =>
  useQuery({
    queryKey: ["auth.logout"],
    queryFn: async (): Promise<any> => {
      const res = await AuthApi.logout()
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false
  })

export const useChangePassword = () => {
  return useMutation({
    mutationKey: ["auth.change_password"],
    mutationFn: (params: { oldPassword: string, newPassword: string }) => AuthApi.changePassword(params),
  })
}

export const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["auth.update_profile"],
    mutationFn: (params: IUserUpdateParams) => AuthApi.updateProfile(params),
  })
}
