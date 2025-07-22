import type { Product } from "@interfaces/product"
import type { Post } from "@interfaces/post"
import type { CartItem } from "@interfaces/cartItem"

export interface ClientState {
    isBurgerMenuOpen: boolean
    totalCount: number,
    totalPrice: number,
    products: Product[],
    posts: Post[],
    cart: CartItem[]
}