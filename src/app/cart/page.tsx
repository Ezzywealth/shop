import CartIndex from '@/components/Cart/CartIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'cart',
};
const CartScreen = () => {
	return (
		<div>
			<CartIndex />
		</div>
	);
};

export default CartScreen;
