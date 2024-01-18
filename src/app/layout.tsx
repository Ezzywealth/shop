import Navbar from '@/components/Nav/Navbar';
import CustomProvider from '@/utils/CustomProvider';
import type { Metadata } from 'next';
import './styles/globals.scss';
import './styles/nav.module.scss';

export const metadata: Metadata = {
	title: 'Market place',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<CustomProvider>
			<html lang='en'>
				<body>
					<Navbar />
					<main>{children}</main>
				</body>
			</html>
		</CustomProvider>
	);
}
