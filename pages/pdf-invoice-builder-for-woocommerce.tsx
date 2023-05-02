import Link from 'next/link';
import { AppHead } from '../components/AppHead';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<AppHead>
				<title>PDF Invoice Builder for WooCommerce - WP Remake</title>
			</AppHead>
			<Header />

			<Content>
				<div className="breadcrumb">
					<span className="crumb">Plugins</span>
					<span className="crumb">/</span>
					<span className="crumb">
						<a href="/site/pdf-invoice-builder-for-woocommerce">
							PDF Invoice Builder for WooCommerce
						</a>
					</span>
				</div>
				<div className="wrapper">
					<div className="column-1">
						<div className="banner-section">
							<img
								src="/site/pibw-banner.png"
								alt="pdf invoice builder logo"
								className="banner"
							/>
						</div>

						<div className="title-section">
							<div className="thumbnail-wrapper">
								<img
									src="/site/pibw-logo-white-bg.png"
									alt="pdf invoice builder logo"
									className="thumbnail"
								/>
							</div>
							<div className="title-column">
								<h1 className="title">PDF Invoice Builder for WooCommerce</h1>
								<div className="author">
									<span className="by">by</span>
									<span className="author-name">WP Remake</span>
								</div>
							</div>
						</div>

						<div className="short-description-section">
							<span className="text">
								Create stunning WooCommerce invoices and packing slips
								effortlessly with any layout and style you want, using the
								Gutenberg editor.
							</span>
						</div>

						<hr />

						<div className="long-description-section">
							<iframe
								className="youtube-embed"
								src="https://www.youtube.com/embed/CZJY4DqkTCw"
								title="PDF Invoice Builder for WooCommerce Demo"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen></iframe>

							<p>
								PDF Invoice Builder for WooCommerce enables you to build
								invoices and packing slips into works of art with complete
								control over layout and styles. You can design your invoices and
								packing slips through the Gutenberg block editor which provides
								a user-friendly drag-and-drop system with blocks. This plugin
								also provides dynamic tags to show any necessary data you want.
								It also comes equipped with gorgeous pre-built templates to
								streamline the design process.
							</p>
						</div>
					</div>
					<div className="column-2">
						<div className="sidebar-card">
							<a
								href="https://trello.com/b/ZW28O6U0/pdf-invoice-builder-for-woocommerce"
								className="btn primary"
								target="_blank"
								rel="noopener noreferrer">
								Roadmap
							</a>
							<a
								href="#"
								className="btn secondary"
								target="_blank"
								rel="noopener noreferrer">
								Documentation
							</a>
						</div>
					</div>
				</div>
			</Content>

			<style jsx>
				{`
					.breadcrumb {
						margin-top: 50px;
					}
					.breadcrumb .crumb {
						font-size: 14px;
					}
					.breadcrumb .crumb a {
						text-decoration: underline;
					}
					.breadcrumb .crumb:not(:last-child) {
						margin-right: 4px;
					}

					.wrapper {
						display: flex;
						margin-top: 50px;
					}

					.wrapper > .column-2 {
						min-width: 350px;
						width: 350px;
						max-width: 350px;
						margin-left: 50px;
					}

					.banner {
						width: 100%;
					}

					.title-column .author {
						font-size: 16px;
						margin-top: 4px;
					}
					.title-column .author .by {
						padding-right: 4px;
					}
					.title-column .author .author-name {
						font-weight: 600;
					}

					.title-section {
						display: flex;
						margin: 20px 0;
					}
					.title-section .title {
						font-size: 28px;
					}
					.thumbnail {
						width: 80px;
						min-width: 80px;
					}
					.thumbnail-wrapper {
						margin-right: 30px;
					}

					.short-description-section .text {
						font-size: 24px;
						line-height: 36px;
					}

					hr {
						background-color: #ccc;
						border: 0;
						height: 1px;
						margin: 40px 0;
					}

					.long-description-section > * {
						margin: 0 0 1.618em;
						font-size: 17px;
						line-height: 1.5;
					}
					.long-description-section .youtube-embed {
						width: 100%;
						aspect-ratio: 16 / 9;
					}

					.sidebar-card {
						padding: 24px;
						border-radius: 8px;
						background: #f6f7f7;
						margin-bottom: 30px;
					}
					.sidebar-card > *:not(:last-child) {
						margin-bottom: 8px;
					}
				`}
			</style>

			<Footer />
		</div>
	);
}
