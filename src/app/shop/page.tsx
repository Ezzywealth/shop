'use client';
import '../styles/page.module.scss';
import '../styles/nav.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import HeroSection from '@/components/Home/HeroSection';
import ProductIndex from '@/components/Home/ProductSection';
import ServiceSection from '@/components/Home/Services/Index';

export default function Shop() {
	const { cart } = useSelector((state: RootState) => state.cart);
	console.log(cart);
	return (
		<main className=''>
			<HeroSection />
			<ProductIndex />
			<ServiceSection />
		</main>
	);
}
