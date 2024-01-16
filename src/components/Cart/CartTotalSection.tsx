import React, { useEffect } from 'react';
import styles from '@/app/styles/cart.module.scss';
import { ProductProp } from '@/interfaces/typings';
import Link from 'next/link';

type Props = {
	cart: ProductProp[];
};
const CartTotalSection = ({ cart }: Props) => {
	const [subtotal, setSubtotal] = React.useState('0');
	const [total, setTotal] = React.useState('0');
	console.log(cart);

	useEffect(() => {
		const total = cart?.reduce((acc, item) => acc + item.price * +item.quantity, 0);
		console.log(total);
		setTotal(total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
		setSubtotal(total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
	}, [cart]);

	return (
		<section className={styles.totals_container}>
			<h2>Cart Totals</h2>
			<div className={styles.total_details}>
				<div className={styles.subtotal}>
					<p>Subtotal</p>
					<p className={styles.subtotal_amount}>${subtotal}</p>
				</div>
				<div className={styles.subtotal}>
					<p>Total</p>
					<p className={styles.total_amount}>${total}</p>
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
