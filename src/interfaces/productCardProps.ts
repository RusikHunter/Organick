import type { Product } from "./product"

export interface ProductCardProps {
    isCartItem?: boolean
    productData: Product
}