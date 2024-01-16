import React, { useState } from 'react';
import styles from '@/app/styles/productView.module.scss';
import { FaCheck } from 'react-icons/fa';
import FacebookIcon from '@/shared/svgs/FacebookIcon';
import LinkedIn from '@/shared/svgs/LinkedIn';
import TwitterIcon from '@/shared/svgs/TwitterIcon';
import { ProductProp } from '@/interfaces/typings';
import HeartIcon from '@/shared/svgs/HeartIcon';

type Props = {
	productDetails: ProductProp | null;
};

const RightBottomView = ({ productDetails }: Props) => {
	const [selectedColor, setSelectedColor] = useState<string>('');
	const colors = ['#000', '#f00', '#0f0', '#00f'];

	return (
		<>
			<div className={styles.colors_container}>
				<h4>Colors</h4>
				<ul className={styles.product_colors}>
					{colors.map((color, index) => (
						<button style={{ backgroundColor: color }} key={index} className={` ${selectedColor.toLowerCase() === color.toLowerCase() ? styles.selected_color : styles.product_color}`} onClick={() => setSelectedColor(color)}>
							{selectedColor.toLowerCase() === color.toLowerCase() && <FaCheck />}
						</button>
					))}
				</ul>
			</div>

			<div className={styles.cart_quantity}>
				<div className={styles.quantity_container}>
					<span>-</span>
					<input type='number' defaultValue={1} />
					<span>+</span>
				</div>
				<button>Add to Cart</button>
			</div>
			<hr className={styles.divider} />

			<section className={styles.bottom_details}>
				<div className={styles.details_container}>
					<p>Category</p>: <span>{productDetails?.category}</span>
				</div>
				<div className={styles.details_container}>
					<p>Brand</p>: <span>{productDetails?.brand}</span>
				</div>
				<div className={styles.details_container}>
					<p>Availability</p>: <span>{productDetails?.stock ? 'In Stock' : 'Out of Stock'}</span>
				</div>
				<div className={styles.details_container}>
					<p>Share</p>:
					<span className={styles.socials}>
						<FacebookIcon /> <LinkedIn />
						<TwitterIcon />
					</span>
					<span style={{ marginLeft: '6rem' }}>
						<HeartIcon />
					</span>
				</div>
			</section>
		</>
	);
};

export default RightBottomView;
