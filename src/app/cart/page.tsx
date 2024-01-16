'use client';

import CartItemTable from '@/components/Cart/CartItemTable';
import CartTotalSection from '@/components/Cart/CartTotalSection';
import FooterSection from '@/components/Footer/FooterSection';
import HeroSection from '@/components/Home/HeroSection';
import ServiceSection from '@/components/Home/Services/Index';
import React from 'react';
import styles from '@/app/styles/cart.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import Link from 'next/link';

const CartScreen = () => {
	const { cart } = useSelector((state: RootState) => state.cart);
	return (
		<div>
			<HeroSection title='Cart' />
			{cart.length < 1 ? (
				<div className={styles.empty_cart_container}>
					<p className={styles.empty_cart}>Cart is currently empty !!!</p>
					<Link href='/shop'>
						<button className={styles.back_to_shop}>Go Shopping</button>
					</Link>
				</div>
			) : (
				<section className={styles.cart_table_container}>
					<CartItemTable cart={cart} />
					<CartTotalSection cart={cart} />
				</section>
			)}
			<ServiceSection />
			<FooterSection />
		</div>
	);
};

export default CartScreen;
