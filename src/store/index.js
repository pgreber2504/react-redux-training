import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../store/Counter';
import authSlice from '../store/Auth';

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})


export default store