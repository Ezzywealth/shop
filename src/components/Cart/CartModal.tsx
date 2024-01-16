// Modal.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/nav.module.scss';
import CloseCartIcon from '@/shared/svgs/CloseCartIcon';
import { RootState } from '@/Redux/Store/store';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import ItemDeleteIcon from '@/shared/svgs/ItemDeleteIcon';
import { removeCartItem } from '@/Redux/Slices/cartSlice';
import Link from 'next/link';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const CartModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const { cart } = useSelector((state: RootState) => state.cart);
	const [totalPrice, setTotalPrice] = useState('');
	const dispatch = useDispatch();

	const handleRemoveItem = (id: number) => {
		console.log(id);
		dispatch(removeCartItem(id));
	};

	useEffect(() => {
		const total = cart.reduce((acc, item) => acc + item.price * +item.quantity, 0);
		setTotalPrice(total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
	}, [cart]);

	return (
		<div className={isOpen ? styles.open_modal : styles.close_modal}>
			<div className={styles.overlay}>
				<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
					<section className={styles.modal_top}>
						<section className={styles.modal_header}>
							<div className={styles.header_title}>
								<h2>Shopping Cart</h2>
								<hr />
							</div>
							<span onClick={onClose}>
								<CloseCartIcon />
							</span>
						</section>

						<section>
							{cart.length < 1 ? (
								<p className={styles.empty_cart}>Cart is currently empty !!!</p>
							) : (
								<ul className={styles.cart_items}>
									{cart.map((item) => (
										<li key={item.id} className={styles.cart_item}>
											<div>
												<Image src={item.thumbnail} width={60} height={40} alt={item.title} />
											</div>
											<div>
												<h3>{item.title}</h3>
												<p className={styles.cart_item_price}>
													{item.quantity} X <span className={styles.cart_amount}>${item.price.toFixed(2)}</span>
												</p>
											</div>
											<span onClick={() => handleRemoveItem(item.id)}>
												<ItemDeleteIcon />
											</span>
										</li>
									))}
								</ul>
							)}
						</section>
					</section>
					<section className={styles.modal_bottom}>
						<div className={styles.total_price}>
							<p className={styles.amount_title}>subtotal</p>
							<p className={styles.amount}>${totalPrice || 0.0}</p>
						</div>
						<hr />
						<div className={styles.buttons}>
							<Link href='/cart'>
								<button onClick={onClose}>View cart</button>
							</Link>
							<Link href='/checkout'>
								<button onClick={onClose}>Checkout</button>
							</Link>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
