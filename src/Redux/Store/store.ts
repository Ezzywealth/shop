'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Slices/cartSlice';
import productslice from '../Slices/productslice';
import helperslice from '../Slices/helperslice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		product: productslice,
		helper: helperslice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => store.dispatch;
export default store;
