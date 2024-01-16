import { removeCartItem } from '@/Redux/Slices/cartSlice';
import { RootState } from '@/Redux/Store/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCartHook = () => {
	const [totalPrice, setTotalPrice] = useState('');
	const { cart } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	const handleRemoveItem = (id: number) => {
		dispatch(removeCartItem(id));
	};

	useEffect(() => {
		const total = cart.reduce((acc, item) => acc + item.price * +item.quantity, 0);
		setTotalPrice(total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
	}, [cart]);
	return {
		handleRemoveItem,
		totalPrice,
		setTotalPrice,
		cart,
	};
};

export default useCartHook;
