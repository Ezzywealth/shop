import { create } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { CartStateSlice } from '@/interfaces/typings';

const initialState: CartStateSlice = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart: (state, action) => {
			state.cart = [...state.cart, action.payload];
		},
	},
});

export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;
