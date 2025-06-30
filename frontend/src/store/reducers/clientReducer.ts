import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../asyncActions/fetchProducts'

export interface Product {
    id: number
    title: string
    type: string
    imageURL: string
    rating: number
    price: number
    discountPrice: number
    description: string
}

interface ClientState {
    isBurgerMenuOpen: boolean
    currentPage: string | null
    products: Product[]
}

const initialState: ClientState = {
    isBurgerMenuOpen: false,
    currentPage: null,
    products: []
}

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setIsBurgerMenuOpen: (state) => {
            state.isBurgerMenuOpen = state.isBurgerMenuOpen === false ? true : false
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export const { setIsBurgerMenuOpen, setCurrentPage } = clientSlice.actions
export default clientSlice.reducer