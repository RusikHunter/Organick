import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { productsURL } from '@config/response-URLs'
import type { Product } from '@interfaces/product'

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    'client/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Product[]>(productsURL)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error loading products: ' + (error as Error))
        }
    }
)