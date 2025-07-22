import { configureStore } from '@reduxjs/toolkit'
import clientReducer from "@store/reducers/clientReducer"

const store = configureStore({
    reducer: {
        client: clientReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store