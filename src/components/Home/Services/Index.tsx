import { servicesData } from '@/utils/servicesData';
import React from 'react';
import styles from '@/app/styles/services.module.scss';
const ServiceSection = () => {
	return (
		<div className={styles.services_bg}>
			<ul>
				{servicesData.map((service) => (
					<li key={service.id}>
						<h3 className={styles.title}>{service.title}</h3>
						<p className={styles.description}>{service.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ServiceSection;
