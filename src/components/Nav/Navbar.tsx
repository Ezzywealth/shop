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
import CartModal from '../Cart/CartModal';
import { toggleCartModal } from '@/Redux/Slices/cartSlice';
import HarmburgerIcon from '@/shared/svgs/HarmburgerIcon';
import DropDownMenu from './DropDownMenu';
import { toggleMenu } from '@/Redux/Slices/helperslice';

const Navbar = () => {
	const dispatch = useDispatch();
	const { cart, showCartModal } = useSelector((state: RootState) => state.cart);
	const { isMenuOpen } = useSelector((state: RootState) => state.helper);

	const onCloseCartModal = () => {
		dispatch(toggleCartModal(false));
	};

	const openCartModal = () => {
		dispatch(toggleCartModal(true));
	};

	const openMenu = () => {
		dispatch(toggleMenu(true));
	};

	const closeMenu = () => {
		dispatch(toggleMenu(false));
	};
	return (
		<nav className={styles.nav_container}>
			<DropDownMenu isOpen={isMenuOpen} onClose={closeMenu} />
			<section className={styles.nav_section}>
				<div className={styles.harmburger_container}>
					<span onClick={openMenu}>
						<HarmburgerIcon />
					</span>
					<div className={styles.nav_rect}>.</div>
				</div>
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
					<li className={styles.cart_container} onClick={openCartModal}>
						<span>
							<CartIcon />
						</span>
						{cart.length > 0 && <p className={styles.cart_count}>{cart.length}</p>}
						<CartModal isOpen={showCartModal} onClose={onCloseCartModal} />
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
