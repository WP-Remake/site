import Head from 'next/head';

export function AppHead(props) {
	return (
		<Head>
			<link rel="icon" href="/site/favicon.svg" />
			<meta
				name="pibw-pdf-doc-url"
				content="https://drive.google.com/file/d/1ZTlu0pd83cxrVWyWQx1gwPfj0hnwwkIz/view?usp=sharing"
			/>
			<meta
				name="pibw-demo-url"
				content="https://restructuresky.s3-tastewp.com/"
			/>
			{props.children}
		</Head>
	);
}
