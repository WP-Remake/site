import Link from 'next/link';
import { AppHead } from '../components/AppHead';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Plugins() {
	return (
		<div>
			<AppHead>
				<title>WP Remake - Plugins</title>
			</AppHead>
			<Header activeMenu="plugins" />

			<Content>
				<div className="plugins-list">
					<div className="plugin-item">
						<div className="column-1">
							<img
								src="/site/pibw-logo-white-bg.png"
								alt="pdf invoice builder logo"
								className="thumbnail"
							/>
						</div>
						<div className="column-2">
							<Link href="/pdf-invoice-builder-for-woocommerce">
								<h2 className="title">PDF Invoice Builder for WooCommerce</h2>
							</Link>
							<p className="description">
								With this powerful WooCommerce extension, you can easily design
								custom invoices and packing slips with any layout you desire,
								all through a user-friendly drag-and-drop builder. Say goodbye
								to rigid templates and hello to a more flexible and efficient
								way of creating professional-looking documents that perfectly
								match your brand. Our plugin streamlines the entire invoicing
								and packing slip creation process, saving you valuable time. Try
								our plugin today and take your invoicing to the next level!
							</p>
							<Link
								href="/pdf-invoice-builder-for-woocommerce"
								className="read-more">
								Read More
							</Link>
						</div>
					</div>
				</div>
			</Content>

			<style jsx>
				{`
					.hero {
						margin-bottom: 200px;
					}
					.hero-message {
						font-size: 100px;
						font-weight: 900;
						text-align: center;
						margin: 70px 0;
						background: -webkit-linear-gradient(45deg, black, #267691 80%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
					.plugins-list {
						margin-bottom: 150px;
					}
				`}
			</style>

			<Footer />
		</div>
	);
}
