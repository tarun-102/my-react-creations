import {configureStore} from '@reduxjs/toolkit'
import authService from '../appwrite/auth';
import authSlice from './authslice';

const store  = configureStore({
    reducer: {
        auth: authSlice,
    }
});

export default store;