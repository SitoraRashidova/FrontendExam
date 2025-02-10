import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { LoginType } from "../type";
import { saveState } from "../../config/storage"; 

export const useCreateLogin = () => {
    return useMutation({
        mutationFn: (data: LoginType) =>
            request.post("/auth/login", data).then((res) => {
                console.log("Login response:", res.data); // 🔍 Debug uchun
                saveState("token", { accessToken: res.data.token }); // ⚠️ `accessToken` deb saqlash kerak
                return res.data;
            }),
    });
};
