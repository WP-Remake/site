import Head from 'next/head';

export function AppHead(props) {
	return (
		<Head>
			<title>WP Remake</title>
			<link rel="icon" href="/favicon.svg" />
			{props.children}
		</Head>
	);
}
