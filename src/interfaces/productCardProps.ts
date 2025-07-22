import type { Product } from "@interfaces/product"

export interface ProductCardProps {
    isCartItem?: boolean
    productData: Product
}