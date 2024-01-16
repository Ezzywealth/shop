'use client';

import CartItemTable from '@/components/Cart/CartItemTable';
import CartTotalSection from '@/components/Cart/CartTotalSection';
import FooterSection from '@/components/Footer/FooterSection';
import HeroSection from '@/components/Home/HeroSection';
import ServiceSection from '@/components/Home/Services/Index';
import React from 'react';
import styles from '@/app/styles/cart.module.scss';

const CartScreen = () => {
	return (
		<div>
			<HeroSection title='Cart' />
			<section className={styles.cart_table_container}>
				<CartItemTable />
				<CartTotalSection />
			</section>
			<ServiceSection />
			<FooterSection />
		</div>
	);
};

export default CartScreen;
