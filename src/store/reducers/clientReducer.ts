import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '@store/asyncActions/fetchProducts'
import { fetchPosts } from '@store/asyncActions/fetchPosts'
import type { Product } from "entities/product"
import type { Post } from "entities/post"
import type { CartItem } from "entities/cartItem"

interface ClientState {
    isBurgerMenuOpen: boolean
    products: Product[],
    posts: Post[],
    cart: CartItem[]
}

const initialState: ClientState = {
    isBurgerMenuOpen: false,
    products: [],
    posts: [],
    cart: []
}

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setIsBurgerMenuOpen: (state) => {
            state.isBurgerMenuOpen = state.isBurgerMenuOpen === false ? true : false
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        addCartItem: (state, action) => {
            for (let i = 0; i < state.cart.length; ++i) {
                if (state.cart[i].id === action.payload.id) {
                    state.cart[i] = action.payload

                    return
                }
            }

            state.cart.push(action.payload)
        },
        removeCartItem: (state, action) => {
            state.cart.splice(action.payload, 1)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
    }
})

export const { setIsBurgerMenuOpen, setCart, addCartItem, removeCartItem } = clientSlice.actions
export default clientSlice.reducer