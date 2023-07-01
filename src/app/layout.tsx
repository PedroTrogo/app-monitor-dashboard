import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { Settings, Bug, AreaChart, ScrollText, LayoutGrid } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'App Monitor Dashboard',
	description: 'Display applications logs in a dashboard'
};

/*
Dark Mode
	#borders - gray-700
	#main-background - gray-900
	
	Text
	#main-text - gray-400

------------------------------------------------------------------------------------------------
Light Mode
	#borders - gray-200
	#main-background - slate-100

	Text
	#main-text - slate-600
*/

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex h-full min-h-screen flex-col border-gray-200 bg-slate-100 text-slate-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
					{/* Main */}
					<div className="flex flex-1 border-inherit">
						<aside className="flex w-80 flex-col gap-1 border-r-2 border-inherit p-4 pt-8">
							<Link
								className={'flex gap-1 rounded p-3 transition-colors hover:bg-gray-700'}
								href={'/'}
							>
								<LayoutGrid />
								Applications
							</Link>
							<Link
								className={'flex gap-1 rounded p-3 transition-colors hover:bg-gray-700'}
								href={'/'}
							>
								<AreaChart />
								Metrics
							</Link>
							<Link
								className={'flex gap-1 rounded p-3 transition-colors hover:bg-gray-700'}
								href={'/'}
							>
								<ScrollText />
								Logs
							</Link>
							<Link
								className={'flex gap-1 rounded p-3 transition-colors hover:bg-gray-700'}
								href={'/'}
							>
								<Bug /> Errors
							</Link>
							<Link
								className={'flex gap-1 rounded p-3 transition-colors hover:bg-gray-700'}
								href={'/'}
							>
								<Settings />
								Settings
							</Link>
						</aside>
						<div className="flex-1">{children}</div>
					</div>

					{/* Footer */}
					<div className="flex justify-center border-t-2 border-inherit p-2">
						<p>this is a footer of application © this is a footer of application</p>
					</div>
				</div>
			</body>
		</html>
	);
}
