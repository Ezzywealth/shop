import React from 'react';
import styles from '@/app/styles/herosection.module.scss';
import Image from 'next/image';
import Breadcrumb from '../BreadCrumbs';

const HeroSection = () => {
	return (
		<section className={styles.hero_banner}>
			<div className={styles.hero_item}>
				<Image src='/assets/images/hero-logo.png' width={60} height={60} alt='hero-logo' />
				<h2 className={styles.logo_text}>Shop</h2>
				<Breadcrumb />
			</div>
		</section>
	);
};

export default HeroSection;