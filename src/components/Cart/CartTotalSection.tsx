import React, { useEffect } from 'react';
import styles from '@/app/styles/cart.module.scss';
import { ProductProp } from '@/interfaces/typings';
import Link from 'next/link';
import useCartHook from '../../hooks/useCartHook';

const CartTotalSection = () => {
	const { totalPrice } = useCartHook();
	const [subtotal, setSubtotal] = React.useState('0');
	const [total, setTotal] = React.useState('0');

	// a useEffect to calculate the total and subtotal of the cart items when the cart changes
	useEffect(() => {
		setTotal(totalPrice);
		setSubtotal(totalPrice);
	}, [totalPrice]);

	return (
		<section className={styles.totals_container}>
			<h2>Cart Totals</h2>
			<div className={styles.total_details}>
				<div className={styles.subtotal}>
					<p>Subtotal</p>
					<p className={styles.subtotal_amount}>Rs. {subtotal}</p>
				</div>
				<div className={styles.subtotal}>
					<p>Total</p>
					<p className={styles.total_amount}>Rs. {total}</p>
				</div>
			</div>
			<div className={styles.button_container}>
				<Link href='/checkout'>
					<button className={styles.total_button}>Check Out</button>
				</Link>
			</div>
		</section>
	);
};

export default CartTotalSection;
