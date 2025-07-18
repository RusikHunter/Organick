import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../asyncActions/fetchProducts'
import type { ClientState } from '../../interfaces/clientState'
import { fetchPosts } from '../asyncActions/fetchPosts'

const initialState: ClientState = {
    isBurgerMenuOpen: false,
    totalCount: 0,
    totalPrice: 0,
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
        setTotalCount: (state, action) => {
            state.totalCount = action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
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

export const { setIsBurgerMenuOpen, setTotalCount, setTotalPrice, setCart, addCartItem, removeCartItem } = clientSlice.actions
export default clientSlice.reducer