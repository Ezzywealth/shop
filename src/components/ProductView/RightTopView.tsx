import React, { useState } from 'react';
import StarRating from './StarRating';
import { ProductProp } from '@/interfaces/typings';
import styles from '@/app/styles/productView.module.scss';
import useProductDetailsHook from '../../hooks/useProductDetailsHook';
type Props = {
	productDetails: ProductProp | null;
};
const RightTopView = ({ productDetails }: Props) => {
	const { selectedSize, setSelectedSize, sizes } = useProductDetailsHook();
	return (
		<div>
			<h2 className={styles.product_title}>{productDetails?.title}</h2>
			<p className={styles.product_price}>Rs. {productDetails?.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
			<span className={styles.ratings_container}>
				<StarRating rating={productDetails?.rating || 0} /> | <span className={styles.texts}>5 Customer Review</span>
			</span>
			<p className={styles.product_description}>{productDetails?.description}</p>
			<div className={styles.sizes_container}>
				<h4>Size</h4>
				<ul className={styles.product_sizes}>
					{sizes.map((size, index) => (
						<button key={index} className={` ${selectedSize.toLowerCase() === size.toLowerCase() ? styles.selected_size : styles.product_size}`} onClick={() => setSelectedSize(size)}>
							{size}
						</button>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RightTopView;
