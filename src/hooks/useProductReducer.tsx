import { buttonPagination, fetchProductDetails, fetchProducts } from '@/Redux/Slices/productslice';
import { RootState, useAppDispatch } from '@/Redux/Store/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useProductReducer = () => {
	const dispatch = useAppDispatch();
	const { products, filteredProducts, itemsPerPage, currentPage, totalPages, noOfItems, startCount, endCount, productsLoading, productDetails, productLoading } = useSelector((state: RootState) => state.product);

	// a useEffect to dispatch the fetchProducts action when the page loads
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	// a function to dispatch the buttonPagination action when the pagination button is clicked
	const handlePagination = (page: number) => {
		dispatch(buttonPagination(page));
	};

	// a function to dispatch the fetchProductDetails action when the product is clicked
	const handleFetchProduct = (id: string) => {
		if (id) {
			dispatch(fetchProductDetails(id));
		}
	};

	return {
		products,
		filteredProducts,
		itemsPerPage,
		currentPage,
		totalPages,
		noOfItems,
		startCount,
		endCount,
		productsLoading,
		handlePagination,
		handleFetchProduct,
		productDetails,
		productLoading,
	};
};

export default useProductReducer;
