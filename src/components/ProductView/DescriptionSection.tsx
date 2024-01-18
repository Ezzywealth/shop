import { RootState } from '@/Redux/Store/store';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '@/app/styles/productView.module.scss';

const DescriptionSection = () => {
	const { productDetails, products } = useSelector((state: RootState) => state.product);
	return (
		<section className={styles.description_container}>
			<div className={styles.description_texts}>
				<h2>Description</h2>
				<p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
				<p>
					Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
				</p>
			</div>
			<div className={styles.description_images}>
				<div className={styles.description_images_div}>
					<Image src={productDetails?.images[0] || ''} alt='product image' layout='fill' />
				</div>
				<div className={styles.description_images_div}>
					<Image src={productDetails?.images[1] || ''} alt='product image' layout='fill' />
				</div>
			</div>
		</section>
	);
};

export default DescriptionSection;
