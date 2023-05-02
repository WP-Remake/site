import { AppHead } from '../components/AppHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

export default function Home() {
	return (
		<div>
			<AppHead>
				<title>Support - WP Remake</title>
			</AppHead>
			<Header activeMenu="support" />

			<Content>
				<div className="support-message-container">
					<p className="support-message">
						Please email us at{' '}
						<a href="mailto:wpremake@gmail.com">wpremake@gmail.com</a> for
						support.
					</p>
				</div>
			</Content>

			<Footer />

			<style jsx>{`
				.support-message-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 80px 0;
				}

				.support-message {
					font-size: 18px;
				}

				a {
					color: #0070f3;
					font-size: 18px;
					font-weight: bold;
					display: inline-block;
					margin-top: 16px;
					text-decoration: none;
				}
			`}</style>
		</div>
	);
}
