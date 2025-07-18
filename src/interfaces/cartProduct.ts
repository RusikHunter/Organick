import type { Product } from "./product"

export interface CartProduct {
    product: Product
    count: number
}