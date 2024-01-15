import React, { use, useEffect } from 'react';
import Products from './Products';
import Filters from './Filters';
import { useDispatch, useSelector } from 'react-redux';
import { buttonPagination, fetchProducts } from '@/Redux/Slices/productslice';
import { RootState } from '@/Redux/Store/store';
import Pagination from '@/components/Pagination/Pagination';

const ProductIndex = () => {
	const dispatch = useDispatch();
	const { products, filteredProducts, itemsPerPage, currentPage, totalPages, noOfItems, startCount, endCount } = useSelector((state: RootState) => state.product);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const handlePagination = (page: number) => {
		console.log(page);
		dispatch(buttonPagination(page));
	};

	return (
		<div>
			<Filters startCount={startCount} endCount={endCount} totalItems={products.length} />
			<Products products={filteredProducts} />
			<Pagination currentPage={currentPage} totalPages={totalPages} totalItems={noOfItems} onPageChange={handlePagination} />
		</div>
	);
};

export default ProductIndex;
