import { addToCart } from '@/Redux/Slices/cartSlice';
import { ProductProp } from '@/interfaces/typings';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const useProductDetailsHook = () => {
	const dispatch = useDispatch();
	const [selectedColor, setSelectedColor] = useState<string>('');
	const [selectedSize, setSelectedSize] = useState<string>('');
	const [quantity, setQuantity] = useState('1');
	const sizes = ['XS', 'L', 'XL'];
	const colors = ['#000', '#f00', '#0f0', '#00f'];

	// decrease the quantity count by 1
	const handleDecrease = () => {
		if (+quantity === 0) return;
		setQuantity((+quantity - 1).toString());
	};

	// increase the quantity count by 1
	const handleIncrease = () => {
		setQuantity((+quantity + 1).toString());
	};

	const handleAddToCart = (item: ProductProp | null) => {
		if (!item) return;

		const obj = {
			...item,
			quantity: +quantity,
		};

		dispatch(addToCart(obj));
	};

	return {
		selectedColor,
		setSelectedColor,
		colors,
		selectedSize,
		setSelectedSize,
		sizes,
		quantity,
		setQuantity,
		handleIncrease,
		handleDecrease,
		handleAddToCart,
	};
};

export default useProductDetailsHook;
