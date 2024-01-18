import CloseMenuIcon from '@/shared/svgs/CloseMenuIcon';
import React from 'react';

type Props = {
	isOpen: boolean;
};

const DropDownMenu = ({ isOpen }: Props) => {
	return (
		<nav>
			<div>
				<CloseMenuIcon />
			</div>
			<ul>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>Shop</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default DropDownMenu;
