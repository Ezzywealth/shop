// CartTable.tsx
import React from 'react';
import styles from '@/app/styles/cart.module.scss';
import DeleteIcon from '@/shared/svgs/DeleteIcon';

const CartItemTable = () => {
	return (
		<table className={styles.cart_table}>
			<thead>
				<tr>
					<th></th>
					<th>Product</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Subtotal</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{/* Sample cart items */}
				<tr>
					<td>Image 1</td>
					<td>Product A</td>
					<td>$20.00</td>
					<td>2</td>
					<td>$40.00</td>
					<td>
						<DeleteIcon />
					</td>
				</tr>
				<tr>
					<td>Image 2</td>
					<td>Product B</td>
					<td>$15.00</td>
					<td>3</td>
					<td>$45.00</td>
					<td>
						<DeleteIcon />
					</td>
				</tr>
				{/* Add more rows as needed */}
			</tbody>
		</table>
	);
};

export default CartItemTable;
