import React from 'react';

const CartSummary = () => {
	return (
		<section>
			<article>
				<h2>Order Summary</h2>
				<div>
					<h3>Product</h3>
					<p>$0.00</p>
				</div>
				<div>
					<h3>Subtotal</h3>
					<p>$0.00</p>
				</div>
				<div>
					<h3>Total</h3>
					<p>$0.00</p>
				</div>
			</article>
			<hr />
			<article>
				<label htmlFor=''>
					<input type='radio' name='' id='' />
					Direct Bank Transfer
				</label>
				<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

				<div>
					<label htmlFor=''>
						<input type='radio' name='' id='' />
						Direct Bank Transfer
					</label>
					<label htmlFor=''>
						<input type='radio' name='' id='' />
						Cash On Delivery
					</label>
				</div>
				<p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
				<div>
					<button>Place order</button>
				</div>
			</article>
		</section>
	);
};

export default CartSummary;
