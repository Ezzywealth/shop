'use client';
import Image from 'next/image';
import './styles/page.module.scss';
import './styles/nav.module.scss';
import variables from './styles/colors.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import HeroSection from '@/components/Home/HeroSection';
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.push('/shop');
	}, []);
	return <main className=''></main>;
}
