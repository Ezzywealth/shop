import { PaginationProps } from '@/interfaces/typings';
import React from 'react';
import styles from '@/app/styles/product.module.scss';
const Pagination = ({ currentPage, totalPages, totalItems, onPageChange }: PaginationProps) => {
	return (
		<section className={styles.pagination_container}>
			{currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Prev</button>}
			<ul>
				{Array.from({ length: totalPages })
					.fill(_)
					.map((page, index) => (
						<button key={index} onClick={() => onPageChange(index + 1)}>
							{index + 1}
						</button>
					))}
			</ul>
			{currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
		</section>
	);
};

export default Pagination;
