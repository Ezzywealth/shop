import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from '@/app/styles/productView.module.scss';

type Props = {
	rating: number;
};

const StarRating = ({ rating }: Props) => {
	const scaledRating = Math.min(5, Math.max(0, rating)); // Scale the rating to a 5-star scale
	const filledStars = Math.floor(scaledRating);
	const remainder = scaledRating - filledStars;

	const renderStars = () => {
		const stars = [];

		for (let i = 0; i < filledStars; i++) {
			stars.push(<FaStar key={i} className={`${styles.star} ${styles.filled}`} />);
		}

		if (remainder > 0) {
			stars.push(<FaStarHalfAlt key='half' className={`${styles.star} ${styles.half}`} />);
		}

		for (let i = filledStars + 1; i < 5; i++) {
			stars.push(<FaStar key={i} className={`${styles.star}`} />);
		}
		return stars.filter((item) => item !== undefined);
	};
	return <div className='star-rating'>{renderStars()}</div>;
};

export default StarRating;
