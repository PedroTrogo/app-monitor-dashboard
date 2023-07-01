import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'App Monitor Dashboard',
	description: 'Display applications logs in a dashboard'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<h1 className="border text-lg font-bold text-black">Root Layout</h1>
				{children}
			</body>
		</html>
	);
}
