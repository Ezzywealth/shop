'use client';
import Image from 'next/image';
import './styles/page.module.scss';
import variables from './styles/colors.module.scss';
import { useSelector } from 'react-redux';

export default function Home() {
	const { cart } = useSelector((state: any) => state.cart);
	console.log(cart);
	return (
		<main className='' style={{ background: variables.backgroundColor }}>
			<h1 className='text-link' style={{ color: variables.colorLink }}>
				this is my next js app
			</h1>
		</main>
	);
}
