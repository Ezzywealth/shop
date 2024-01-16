import React from 'react';
import styles from '@/app/styles/cart.module.scss';

const CartTotalSection = () => {
	return (
		<section className={styles.totals_container}>
			<h2>Cart Totals</h2>
			<div className={styles.total_details}>
				<div className={styles.subtotal}>
					<p>Subtotal</p>
					<p className={styles.subtotal_amount}>Rs. 250,000.00</p>
				</div>
				<div className={styles.subtotal}>
					<p>Total</p>
					<p className={styles.total_amount}>Rs. 250,000.00</p>
				</div>
			</div>
			<div className={styles.button_container}>
				<button className={styles.total_button}>Check Out</button>
			</div>
		</section>
	);
};

export default CartTotalSection;
