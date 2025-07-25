import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { postsURL } from '@config/response-URLs'
import type { Post } from 'entities/post'

export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
    'client/fetchPosts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Post[]>(postsURL)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error loading posts: ' + (error as Error))
        }
    }
)