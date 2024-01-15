import { ProductProp, ProductStateSlice } from '@/interfaces/typings';
import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/product.module.scss';
import Link from 'next/link';

type Props = {
	products: ProductProp[];
};
const Products = ({ products }: Props) => {
	return (
		<section>
			<ul className={styles.products}>
				{products.map((product) => (
					<Link key={product.id} href={`/shop/${product.title.toLowerCase().split(' ').join('-')}?id=${product.id}`}>
						<li className={styles.product}>
							<Image src={product.thumbnail} alt={product.title} width={250} height={150} />
							<h4>{product.title}</h4>
							<p>{`Rs. ${product.price.toFixed(2)}`}</p>
						</li>
					</Link>
				))}
			</ul>
		</section>
	);
};

export default Products;
