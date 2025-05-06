import { createSlice } from '@reduxjs/toolkit'

interface ClientState {
    isBurgerMenuOpen: boolean
}

const initialState: ClientState = {
    isBurgerMenuOpen: false
}

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setIsBurgerMenuOpen: (state) => {
            state.isBurgerMenuOpen = state.isBurgerMenuOpen === false ? true : false
        },
    },
})

export const { setIsBurgerMenuOpen } = clientSlice.actions
export default clientSlice.reducer