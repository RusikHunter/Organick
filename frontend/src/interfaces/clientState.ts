import type { Product } from "./product"
import type { LocalStorageProductData } from "./localStorageProductData"

export interface ClientState {
    isBurgerMenuOpen: boolean
    currentPage: string | null
    products: Product[],
    cart: LocalStorageProductData[]
}