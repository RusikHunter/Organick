import { createSlice } from '@reduxjs/toolkit'

interface ClientState {
    isBurgerMenuOpen: boolean
    currentPage: string | null
}

const initialState: ClientState = {
    isBurgerMenuOpen: false,
    currentPage: null
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
})

export const { setIsBurgerMenuOpen, setCurrentPage } = clientSlice.actions
export default clientSlice.reducer