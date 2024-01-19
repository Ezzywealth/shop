import React, { use, useEffect } from 'react';
import Products from './Products';
import Filters from './Filters';
import Pagination from '@/components/Pagination/Pagination';
import useProductReducer from '@/hooks/useProductReducer';

const ProductIndex = () => {
	const { products, filteredProducts, currentPage, totalPages, noOfItems, startCount, endCount, productsLoading, handlePagination } = useProductReducer();

	return (
		<div>
			<Filters startCount={startCount} endCount={endCount} totalItems={products.length} />
			<Products products={filteredProducts} productsLoading={productsLoading} />
			{totalPages > 1 && !productsLoading && <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={noOfItems} onPageChange={handlePagination} />}
		</div>
	);
};

export default ProductIndex;
