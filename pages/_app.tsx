import '../styles/globals.css';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

export default function App({ Component, pageProps }) {
	return (
		<>
			<GoogleAnalytics measurementId="G-GQKS4PHF75" />
			<Component {...pageProps} />
		</>
	);
}
