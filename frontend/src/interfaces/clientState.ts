import type { Product } from "./product"

export interface ClientState {
    isBurgerMenuOpen: boolean
    currentPage: string | null
    products: Product[]
}