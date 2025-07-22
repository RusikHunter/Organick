import type { Product } from "@interfaces/product"

export interface CartProduct {
    product: Product
    count: number
}