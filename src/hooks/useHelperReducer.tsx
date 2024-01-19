import { fetchCart, toggleCartModal } from '@/Redux/Slices/cartSlice';
import { toggleMenu } from '@/Redux/Slices/helperslice';
import { RootState, useAppDispatch } from '@/Redux/Store/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useHelperReducer = () => {
	const dispatch = useAppDispatch();
	const { cart, showCartModal } = useSelector((state: RootState) => state.cart);
	const { isMenuOpen } = useSelector((state: RootState) => state.helper);

	// a function to fetch the cart items from the local storage when the page loads
	const fetchLocalStorage = () => {
		if (window !== undefined) {
			const items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [];
			dispatch(fetchCart(items));
		}
	};

	// a useEffect to call the fetchLocalStorage function when the page loads
	useEffect(() => {
		fetchLocalStorage();
	}, []);

	// a function to dispatch the toggleCartModal action when the cart modal is closed
	const onCloseCartModal = () => {
		dispatch(toggleCartModal(false));
	};

	// a function to dispatch the toggleCartModal action when the cart modal is opened
	const openCartModal = () => {
		dispatch(toggleCartModal(true));
	};

	// a function to dispatch the toggleMenu action when the menu is opened
	const openMenu = () => {
		dispatch(toggleMenu(true));
	};

	// a function to dispatch the toggleMenu action when the menu is closed
	const closeMenu = () => {
		dispatch(toggleMenu(false));
	};

	return {
		cart,
		showCartModal,
		isMenuOpen,
		onCloseCartModal,
		openCartModal,
		openMenu,
		closeMenu,
	};
};

export default useHelperReducer;
