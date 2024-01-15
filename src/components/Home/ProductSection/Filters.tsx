import FilterIcon from '@/shared/svgs/FilterIcon';
import GridIcon from '@/shared/svgs/GridIcon';
import ViewListIcon from '@/shared/svgs/ViewListIcon';
import React from 'react';
import styles from '@/app/styles/product.module.scss';

const Filters = () => {
	return (
		<section className={styles.filters_bg}>
			<article>
				<div>
					<FilterIcon />
					<h5 className={styles.filter_text}>Filters</h5>
					<GridIcon />
					<ViewListIcon />
				</div>

				<div>
					<p>Showing 1–16 of 32 results</p>
				</div>
			</article>
			<article>
				<div>
					<label htmlFor='' className={styles.label_input}>
						Show
						<input type='text' className={styles.show_input} value={16} />
					</label>
				</div>
				<div>
					<label htmlFor='' className={styles.label_input}>
						Short By
						<input type='text' className={styles.short_input} value={'Default'} />
					</label>
				</div>
			</article>
		</section>
	);
};

export default Filters;
