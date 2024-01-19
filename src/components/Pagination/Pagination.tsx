import { PaginationProps } from '@/interfaces/typings';
import React from 'react';
import styles from '@/app/styles/product.module.scss';

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange }: PaginationProps) => {
	return (
		<section className={styles.pagination_container}>
			{currentPage > 1 && (
				<button className={styles.pag_btn} onClick={() => onPageChange(currentPage - 1)}>
					Prev
				</button>
			)}
			<ul>
				{Array.from({ length: totalPages }).map((page, index) => (
					<button key={index} onClick={() => onPageChange(index + 1)} className={currentPage === index + 1 ? styles.active_btn : styles.pag_btn}>
						{index + 1}
					</button>
				))}
			</ul>
			{currentPage < totalPages && (
				<button className={styles.pag_btn} onClick={() => onPageChange(currentPage + 1)}>
					Next
				</button>
			)}
		</section>
	);
};

export default Pagination;
