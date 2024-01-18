'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/styles/breadcrumbs.module.scss';
import ArrowNext from '@/shared/svgs/ArrowNext';

const Breadcrumb = () => {
	const pathname = usePathname();
	const pathSegments = pathname.split('/').filter((segment) => segment !== '');
	const searchParams = useSearchParams();
	const id = searchParams.get('id');

	return (
		<nav className={styles.bread_container}>
			<ul className={styles.crumbs_container}>
				<li>
					<Link className={styles.home_link} href='/'>
						Home
					</Link>
				</li>
				{pathSegments.map((segment, index) => (
					<li key={index} className={styles.bread_links}>
						<ArrowNext />
						{index === pathSegments.length - 1 ? (
							<Link className={styles.active_link} href={`/${pathSegments.slice(0, index + 1).join('/')}${id ? `?id=${id}` : ''}`}>
								{segment.length > 15 ? segment.slice(0, 15) + '...' : segment}
							</Link>
						) : (
							<Link className={styles.inactive_link} href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
								{segment}
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Breadcrumb;
