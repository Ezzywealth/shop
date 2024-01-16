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
		addToCart: (state, action) => {
			const item = state.cart.find((i) => i.id === action.payload.id);
			if (item) {
				item.quantity += 1;
				return;
			}
			state.cart = [...state.cart, action.payload];
		},
	},
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
