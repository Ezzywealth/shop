import { create } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { CartStateSlice } from '@/interfaces/typings';
import { toast } from 'react-toastify';
const initialState: CartStateSlice = {
	cart: [],
	showCartModal: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.cart.find((i) => i.id === action.payload.id);
			if (item && item.quantity) {
				item.quantity = action.payload.quantity;
				toast.success('cart successfully updated');
				return;
			}
			state.cart = [...state.cart, action.payload];
			toast.success('item added to cart');
		},
		toggleCartModal: (state, action) => {
			state.showCartModal = action.payload;
		},
		removeCartItem: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, toggleCartModal, removeCartItem } = cartSlice.actions;
