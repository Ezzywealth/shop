'use client';
import CartIcon from '@/shared/svgs/CartIcon';
import FavoriteIcon from '@/shared/svgs/FavoriteIcon';
import SearchIcon from '@/shared/svgs/SearchIcon';
import PersonIcon from '@/shared/svgs/PersonIcon';
import { navlinks } from '@/utils/navlinksData';
import React from 'react';
import styles from '@/app/styles/nav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import Link from 'next/link';
import CartModal from './Cart/CartModal';
import { toggleCartModal } from '@/Redux/Slices/cartSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const { cart, showCartModal } = useSelector((state: RootState) => state.cart);

	const onClose = () => {
		dispatch(toggleCartModal(false));
	};

	const openModal = () => {
		dispatch(toggleCartModal(true));
	};
	return (
		<nav className={styles.nav_container}>
			<section className={styles.nav_section}>
				<ul className={styles.navlinks_container}>
					{navlinks.map((link) => (
						<li key={link.id}>
							<Link href={link.link}>{link.name}</Link>
						</li>
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
					<li className={styles.cart_container} onClick={openModal}>
						<span>
							<CartIcon />
						</span>
						{cart.length > 0 && <p className={styles.cart_count}>{cart.length}</p>}
						<CartModal isOpen={showCartModal} onClose={onClose} />
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
