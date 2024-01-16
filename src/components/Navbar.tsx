'use client';

import CartIcon from '@/shared/svgs/CartIcon';
import FavoriteIcon from '@/shared/svgs/FavoriteIcon';
import SearchIcon from '@/shared/svgs/SearchIcon';
import PersonIcon from '@/shared/svgs/PersonIcon';
import { navlinks } from '@/utils/navlinksData';
import React from 'react';
import styles from '@/app/styles/nav.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';

const Navbar = () => {
	const { cart } = useSelector((state: RootState) => state.cart);
	return (
		<nav className={styles.nav_container}>
			<section className={styles.nav_section}>
				<ul className={styles.navlinks_container}>
					{navlinks.map((link) => (
						<li key={link.id}>{link.name}</li>
					))}
				</ul>
				<ul className={styles.navicons_container}>
					<li>
						<PersonIcon />
					</li>
					<li>
						<SearchIcon />
					</li>
					<li>
						<FavoriteIcon />
					</li>
					<li className={styles.cart_container}>
						<CartIcon />
						{cart.length > 0 && <p className={styles.cart_count}>{cart.length}</p>}
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
