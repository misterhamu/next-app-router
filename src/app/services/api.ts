
import { Product } from "../products/page"
import httpClient from "./http-client"
export async function GetProductDetail(req: string){
    return httpClient.get<Product>(`/products/${req}`)
}