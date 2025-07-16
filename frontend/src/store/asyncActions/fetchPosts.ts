import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { postsURL } from '../../assets/responseURLs'

export const fetchPosts = createAsyncThunk(
    'client/fetchPosts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(postsURL)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error loading posts: ' + error)
        }
    }
)