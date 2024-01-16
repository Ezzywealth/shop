import { RootState } from '@/Redux/Store/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '@/app/styles/productView.module.scss';

const RelatedSection = () => {
	const { productDetails, products } = useSelector((state: RootState) => state.product);
	return (
		<section className={styles.related_products_container}>
			<h2>Related</h2>
			<ul className={styles.related_images}>
				{products
					.filter((product) => product.category === productDetails?.category && product.id !== productDetails?.id)
					.map((product, index) => (
						<li key={index}>
							<Link href={`/shop/${product.title.toLowerCase().split(' ').join('-')}?id=${product.id}`}>
								<Image src={product.images[0]} alt='product image' width={250} height={150} />
								<h4>{product.title}</h4>
								<p>${product.price.toFixed(2)}</p>
							</Link>
						</li>
					))}
			</ul>
			<section className={styles.view_container}>
				<span className={styles.view_btn}>View More</span>
			</section>
		</section>
	);
};

export default RelatedSection;
