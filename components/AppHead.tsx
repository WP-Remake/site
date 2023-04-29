import Head from 'next/head';

export function AppHead(props) {
	return (
		<Head>
			<link rel="icon" href="/favicon.svg" />
			{props.children}
		</Head>
	);
}
