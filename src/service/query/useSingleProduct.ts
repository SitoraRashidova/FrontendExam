import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../type";

export const useSingleProduct = (id: number) => {
    return useQuery({
        queryKey: ["single-product", id],
        queryFn: () =>  request.get<ProductType>(`/products/${id}`).then((res) => res.data)
    })
}