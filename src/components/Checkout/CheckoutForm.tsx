import React from 'react';
import styles from '@/app/styles/checkout.module.scss';
const CheckoutForm = () => {
	return (
		<div className={styles.form_container}>
			<form>
				<div className={styles.name}>
					<div className={styles.form_group}>
						<label htmlFor='firstName'>First Name</label>
						<input type='text' id='firstName' className={styles.input_field} />
					</div>
					<div className={styles.form_group}>
						<label htmlFor='lastName'>Last Name</label>
						<input type='text' id='lastName' className={styles.input_field} />
					</div>
				</div>
				<div className={styles.form_group}>
					<label htmlFor='companyName'>Company Name (Optional)</label>
					<input type='text' id='companyName' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='country'>Country / Region</label>
					<input type='text' id='country' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='streetAddress'>Street Address</label>
					<input type='text' id='streetAddress' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='townCity'>Town / City</label>
					<input type='text' id='townCity' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='province'>Province</label>
					<input type='text' id='province' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='zipCode'>ZIP Code</label>
					<input type='text' id='zipCode' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='phone'>Phone</label>
					<input type='tel' id='phone' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='email'>Email Address</label>
					<input type='email' id='email' className={styles.input_field} />
				</div>
				<div className={styles.form_group}>
					<label htmlFor='additionalInfo'>Additional Information</label>
					<textarea id='additionalInfo' className={styles.input_field} />
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
