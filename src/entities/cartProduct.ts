import type { Product } from "entities/product"

export type CartProduct = {
    product: Product
    count: number
}