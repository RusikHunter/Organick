import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { productsURL } from '../../assets/responseURLs'

export const fetchProducts = createAsyncThunk(
    'client/fetchProducts',
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get(productsURL)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error loading products: ' + error)
        }
    }
)