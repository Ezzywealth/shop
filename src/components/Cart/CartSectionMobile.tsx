import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles/cart.module.scss';
import Image from 'next/image';
import useCartHook from './hooks/useCartHook';
import Breadcrumb from '../Nav/BreadCrumbs';
import DeleteIcon from '@/shared/svgs/DeleteIcon';

const CartSectionMobile = () => {
	const { handleRemoveItem, totalPrice, cart } = useCartHook();
	return (
		<div>
			<Breadcrumb />
			<div className={styles.modal}>
				<section className={styles.modal_top}>
					<section>
						<ul className={styles.cart_items}>
							{cart.map((item) => (
								<li key={item.id} className={styles.cart_item}>
									<div className={styles.cart_item_left}>
										<div>
											<Image height={70} width={90} src={item.thumbnail} alt={item.title} />
										</div>
										<div className={styles.cart_item_details}>
											<h3>{item.title}</h3>
											<p className={styles.prize}>Rs. {(item.price * +item.quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
											<p className={styles.quantity_value}>
												<span className={styles.quantity}>{item.quantity}</span>
											</p>
										</div>
									</div>

									<span onClick={() => handleRemoveItem(item.id)} className={styles.delete_icon}>
										<DeleteIcon />
									</span>
								</li>
							))}
						</ul>
					</section>
				</section>
				<hr />
				<section className={styles.cart_mobile_bottom}>
					<div className={styles.cart_mobile_bottom_total_price}>
						<p className={styles.cart_mobile_bottom_amount_title}>Total</p>
						<p className={styles.cart_mobile_bottom_amount}>Rs. {totalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 0.0}</p>
					</div>
					<div className={styles.cart_mobile_bottom_buttons}>
						<Link href='/checkout'>
							<button>Checkout</button>
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
};

export default CartSectionMobile;
