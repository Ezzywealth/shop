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
					<select name='' id='' className={styles.input_field}>
						<option value=''>Select Country</option>
						<option value=''>Nepal</option>
						<option value=''>India</option>
						<option value=''>China</option>
						<option value=''>USA</option>
					</select>
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
					<select name='' id='' className={styles.input_field}>
						<option value=''>Select Province</option>
						<option value=''>Province 1</option>
						<option value=''>Province 2</option>
						<option value=''>Province 3</option>
						<option value=''>Province 4</option>
						<option value=''>Province 5</option>
						<option value=''>Province 6</option>
						<option value=''>Province 7</option>
					</select>
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
