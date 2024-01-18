// CartTable.tsx
import React from 'react';
import styles from '@/app/styles/cart.module.scss';
import DeleteIcon from '@/shared/svgs/DeleteIcon';
import { ProductProp } from '@/interfaces/typings';
import Image from 'next/image';
import useCartHook from './hooks/useCartHook';

type Props = {
	cart: ProductProp[];
};
const CartItemTable = ({ cart }: Props) => {
	const { handleRemoveItem, totalPrice } = useCartHook();
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
				{cart.map((item) => (
					<tr key={item.id}>
						<td>
							<Image height={40} width={40} src={item.thumbnail} alt={item.title} />
						</td>
						<td>{item.title}</td>
						<td>Rs.{item.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
						<td className={styles.quantity_value}>
							<span>{item.quantity}</span>
						</td>
						<td className={styles.prize}>Rs.{(item.price * +item.quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
						<td>
							<span onClick={() => handleRemoveItem(item.id)} className={styles.delete_icon}>
								<DeleteIcon />
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CartItemTable;
