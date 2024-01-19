import CheckoutForm from '@/components/Checkout/CheckoutForm';
import FooterSection from '@/components/Footer/FooterSection';
import HeroSection from '@/components/Home/HeroSection';
import ServiceSection from '@/components/Home/Services/Index';
import styles from '@/app/styles/checkout.module.scss';
import { Metadata } from 'next';
import React from 'react';
import CartSummary from '@/components/Checkout/CartSummary';

export const metadata: Metadata = {
	title: 'checkout',
};

const CheckoutScreen = () => {
	return (
		<div>
			<HeroSection title='Checkout' />
			<main className={styles.checkout}>
				<h1 className={styles.billing_details}>Billing details</h1>
				<section className={styles.checkout_container}>
					<CheckoutForm />
					<CartSummary />
				</section>
			</main>
			<ServiceSection />
			<FooterSection />
		</div>
	);
};

export default CheckoutScreen;
