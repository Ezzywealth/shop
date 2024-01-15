import CartIcon from '@/shared/svgs/CartIcon';
import FavoriteIcon from '@/shared/svgs/FavoriteIcon';
import SearchIcon from '@/shared/svgs/SearchIcon';
import PersonIcon from '@/shared/svgs/PersonIcon';
import { navlinks } from '@/utils/navlinksData';
import React from 'react';
import styles from '@/app/styles/nav.module.scss';

const Navbar = () => {
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
					<li>
						<CartIcon />
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
