import type { Product } from "./product"
import type { Post } from "./post"
import type { CartItem } from "./cartItem"

export interface ClientState {
    isBurgerMenuOpen: boolean
    totalCount: number,
    totalPrice: number,
    products: Product[],
    posts: Post[],
    cart: CartItem[]
}