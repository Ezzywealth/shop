'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Slices/cartSlice';
import productslice from '../Slices/productslice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		product: productslice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
