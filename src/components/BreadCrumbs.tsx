'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/styles/breadcrumbs.module.scss';
import ArrowNext from '@/shared/svgs/ArrowNext';

const Breadcrumb = () => {
	const router = useRouter();
	const pathname = usePathname();
	const pathSegments = pathname.split('/').filter((segment) => segment !== '');
	console.log(pathname);
	console.log(pathSegments);

	return (
		<nav className={styles.bread_container}>
			<ul className={styles.crumbs_container}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				{pathSegments.map((segment, index) => (
					<li key={index} className={styles.bread_links}>
						<ArrowNext />
						<Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Breadcrumb;
