import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";
import { ProductResponse } from "../type";

export const useGetProducts = () => {
    return useQuery({
        queryKey: ["product"],
        queryFn: () => request.get<ProductResponse>("/products").then((res) => res.data)
    })
}