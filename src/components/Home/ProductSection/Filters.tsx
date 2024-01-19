import FilterIcon from '@/shared/svgs/FilterIcon';
import GridIcon from '@/shared/svgs/GridIcon';
import ViewListIcon from '@/shared/svgs/ViewListIcon';
import React from 'react';
import styles from '@/app/styles/product.module.scss';

type Props = {
	startCount: number;
	endCount: number;
	totalItems: number;
};
const Filters = ({ startCount, endCount, totalItems }: Props) => {
	return (
		<section className={styles.filters_bg}>
			<article>
				<div>
					<FilterIcon />
					<h5 className={styles.filter_text}>Filters</h5>
					<GridIcon />
					<ViewListIcon />
				</div>

				<div className={styles.showing}>
					<p>
						Showing {startCount} – {endCount} of {totalItems} results
					</p>
				</div>
			</article>
			<hr className={styles.vertical_divider} />
			<article className={styles.input_container}>
				<div>
					<label htmlFor='' className={styles.label_input}>
						Show
						<input type='text' defaultValue={16} className={styles.show_input} />
					</label>
				</div>
				<hr className={styles.vertical_divider} />
				<div className={styles.sort_by}>
					<label htmlFor='' className={styles.label_input}>
						<span>Sort By</span>
						<select name='' id='' className={styles.sort_input}>
							<option value=''>Default</option>
							<option value=''>Price</option>
							<option value=''>Name</option>
							<option value=''>Rating</option>
						</select>
						{/* <input type='text' className={styles.short_input} /> */}
					</label>
				</div>
			</article>
		</section>
	);
};

export default Filters;
