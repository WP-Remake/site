import Head from 'next/head';

export function AppHead(props) {
	return (
		<Head>
			<link rel="icon" href="/site/favicon.svg" />
			{props.children}
		</Head>
	);
}
