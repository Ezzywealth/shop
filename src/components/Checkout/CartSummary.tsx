import React from 'react';
import styles from '@/app/styles/checkout.module.scss';
import Link from 'next/link';

const CartSummary = () => {
	return (
		<section className={styles.summary_container}>
			<article className={styles.summary_top}>
				<div className={styles.summary_detail}>
					<h3 className={styles.summary_header}>Product</h3>
					<h3 className={styles.summary_header}>Subtotal</h3>
				</div>
				<div className={styles.summary_detail}>
					<p className={styles.product_name}>Asgaard sofa X 1</p>
					<p>Rs. 250,000.00</p>
				</div>
				<div className={styles.summary_detail}>
					<p className={styles.summary_title}>Subtotal</p>
					<p>Rs. 250,000.00</p>
				</div>
				<div className={styles.summary_detail}>
					<p className={styles.summary_title}>Total</p>
					<p className={styles.summary_total_figure}>Rs. 250,000.00</p>
				</div>
			</article>
			<hr />
			<article className={styles.summary_bottom}>
				<label htmlFor=''>
					<input type='radio' name='' id='' checked />
					Direct Bank Transfer
				</label>
				<p className={styles.summary_bottom_text_first}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

				<div>
					<label htmlFor=''>
						<input type='radio' name='' id='' />
						Direct Bank Transfer
					</label>
					<label htmlFor=''>
						<input type='radio' name='' id='' />
						Cash On Delivery
					</label>
				</div>
				<p className={styles.summary_bottom_text_second}>
					Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
					<Link href='/privacy' className={styles.privacy_link}>
						privacy policy
					</Link>
					.
				</p>
				<div className={styles.summary_button_container}>
					<button>Place order</button>
				</div>
			</article>
		</section>
	);
};

export default CartSummary;
