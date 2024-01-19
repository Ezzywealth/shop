import { ProductProp, ProductStateSlice } from '@/interfaces/typings';
import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/product.module.scss';
import Link from 'next/link';
import { CirclesWithBar } from 'react-loader-spinner';
import CustomImage from './CustomImage';

type Props = {
	products: ProductProp[];
	productsLoading: boolean;
};

const Products = ({ products, productsLoading }: Props) => {
	if (productsLoading) {
		return (
			<section className={styles.products_loading_container}>
				<CirclesWithBar height='100' width='100' color='#b88e2f' outerCircleColor='#b88e2f' innerCircleColor='#b88e2f' barColor='#b88e2f' ariaLabel='circles-with-bar-loading' wrapperStyle={{}} wrapperClass='' visible={true} />
			</section>
		);
	}
	return (
		<section>
			<ul className={styles.products}>
				{products.map((product) => (
					<Link key={product.id} href={`/shop/${product.title.toLowerCase().split(' ').join('-')}?id=${product.id}`}>
						<li className={styles.product}>
							<CustomImage imageSrc={product.thumbnail} alt={product.title} />
							{/* <Image src={product.thumbnail} alt={product.title} layout='responsive' width={250} height={150} /> */}
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
