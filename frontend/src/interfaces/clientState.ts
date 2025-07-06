import type { Product } from "./product"
import type { CartItem } from "./cartItem"

export interface ClientState {
    isBurgerMenuOpen: boolean
    currentPage: string | null
    products: Product[],
    cart: CartItem[]
}