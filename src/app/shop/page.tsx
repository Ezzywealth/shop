'use client';
import Image from 'next/image';
import '../styles/page.module.scss';
import '../styles/nav.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import HeroSection from '@/components/Home/HeroSection';

export default function Shop() {
	const { cart } = useSelector((state: RootState) => state.cart);
	console.log(cart);
	return (
		<main className=''>
			<HeroSection />
		</main>
	);
}