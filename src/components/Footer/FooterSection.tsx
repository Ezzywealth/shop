import { help, links } from '@/utils/footerData';
import React from 'react';
import styles from '@/app/styles/footer.module.scss';
import Link from 'next/link';

const FooterSection = () => {
	return (
		<section className={styles.footer_container}>
			<div className={styles.footer_top_container}>
				<div className={styles.footer_address}>
					<p>400 University Drive Suite 200 Coral Gables,</p>
					<p>FL 33134 USA</p>
				</div>
				<div>
					<h3 className={styles.header}>Links</h3>
					<ul>
						{links.map((link) => (
							<Link href={link.link} key={link.id}>
								<li>{link.title}</li>
							</Link>
						))}
					</ul>
				</div>
				<div>
					<h3 className={styles.header}>Help</h3>
					<ul>
						{help.map((link) => (
							<Link href={link.link} key={link.id}>
								<li>{link.title}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className={styles.privacy_section}>
					<h3 className={styles.header}>Privacy Policies</h3>
					<form action=''>
						<input type='text' placeholder='Enter Your Email Address' />
						<button type='submit'>SUBSCRIBE</button>
					</form>
				</div>
			</div>
			<hr />
			<div>
				<p>2022 Meubel House. All rights reverved</p>
			</div>
		</section>
	);
};

export default FooterSection;
