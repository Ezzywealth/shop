import CloseMenuIcon from '@/shared/svgs/CloseMenuIcon';
import React from 'react';
import styles from '@/app/styles/nav.module.scss';
import Link from 'next/link';
type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const DropDownMenu = ({ isOpen, onClose }: Props) => {
	return (
		<nav className={`${styles.drop_down_container} ${isOpen ? styles.open_drop_down : styles.close_drop_down}`}>
			<span onClick={onClose}>
				<CloseMenuIcon />
			</span>
			<ul>
				<li onClick={onClose}>
					<Link href='/'>Home</Link>
				</li>
				<li onClick={onClose}>
					<Link href='/shop'>Shop</Link>
				</li>
				<li onClick={onClose}>
					<Link href='/about'>About</Link>
				</li>
				<li onClick={onClose}>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default DropDownMenu;
