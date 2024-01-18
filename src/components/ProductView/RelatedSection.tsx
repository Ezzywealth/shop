import { RootState } from '@/Redux/Store/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '@/app/styles/productView.module.scss';

const RelatedSection = () => {
	const { productDetails, products, relatedProducts } = useSelector((state: RootState) => state.product);

	return (
		<section className={styles.related_products_container}>
			<h2>Related</h2>
			<ul className={styles.related_images}>
				{relatedProducts.slice(0, 4).map((product, index) => (
					<li key={index}>
						<Link href={`/shop/${product.title.toLowerCase().split(' ').join('-')}?id=${product.id}`}>
							<div className={styles.related_image_container}>
								<Image src={product.images[0]} alt='product image' layout='fill' />
							</div>
							<h4>{product.title}</h4>
							<p>Rs. {product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
						</Link>
					</li>
				))}
			</ul>
			<section className={styles.view_container}>
				<Link href='/shop'>
					<span className={styles.view_btn}>View More</span>
				</Link>
			</section>
		</section>
	);
};

export default RelatedSection;
