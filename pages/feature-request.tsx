import { AppHead } from '../components/AppHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

export default function FeatureRequest() {
	return (
		<div>
			<AppHead>
				<title>Feature Request - WP Remake</title>
			</AppHead>
			<Header activeMenu="feature-request" />

			<Content>
				<div className="feature-request-message-container">
					<p className="feature-request-message">
						Please email us at{' '}
						<a href="mailto:wpremake@gmail.com">wpremake@gmail.com</a> to
						request a feature.
					</p>
				</div>
			</Content>

			<Footer />

			<style jsx>{`
				.feature-request-message-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 80px 0;
				}

				.feature-request-message {
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
