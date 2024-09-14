import Link from 'next/link';
import { AppHead } from '../components/AppHead';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Script from 'next/script';

const random_number = Math.floor(Math.random() * 1000000000000) + 1; // Between 1 and 1000000000000

export default function PIBW() {
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
				<div className="main-section">
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
								<strong>PDF Invoice Builder for WooCommerce</strong> enables you
								to build invoices and packing slips into works of art with
								complete control over layout and styles. You can design your
								invoices and packing slips through the{' '}
								<strong>Gutenberg block editor</strong> which provides a
								user-friendly drag-and-drop system with blocks. This plugin also
								provides dynamic tags to show any necessary data you want. It
								also comes equipped with gorgeous pre-built templates to
								streamline the design process.
							</p>
						</div>
					</div>
					<div className="column-2">
						{/* <div className="sidebar-card">
							<div className="price-section">
								<div className="monthly-price">
									<span className="text price">$9.99</span>
									<span className="text month">/ month</span>
								</div>
								<div className="yearly-price">
									<span className="text">Annual subscription for $99.99</span>
								</div>
							</div>
							<button id="purchase" className="btn primary">
								Buy Now
							</button>
						</div> */}
						<div className="sidebar-card">
							<a
								className="btn primary pibw-docs-link"
								href="https://drive.google.com/file/d/1ZTlu0pd83cxrVWyWQx1gwPfj0hnwwkIz/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer">
								Documentation
							</a>
							<a
								className="btn secondary pibw-demo-link"
								href="https://drive.google.com/file/d/1ZTlu0pd83cxrVWyWQx1gwPfj0hnwwkIz/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer">
								Demo
							</a>
							{/* <a
								href="https://trello.com/b/ZW28O6U0/pdf-invoice-builder-for-woocommerce"
								className="btn secondary"
								target="_blank"
								rel="noopener noreferrer">
								Roadmap
							</a> */}
						</div>
					</div>
				</div>
			</Content>

			<Script
				id="jquery-script"
				src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
			{/* <Script
				src="https://checkout.freemius.com/checkout.min.js"
				defer></Script> */}
			{/* <Script src="/site/freemius-integration.js" defer></Script> */}
			<Script src={'/site/pibw.js?rand=' + random_number}></Script>

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

					.main-section {
						display: flex;
						margin-top: 50px;
						margin-bottom: 100px;
					}

					.main-section > .column-2 {
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
						margin-bottom: 18px;
					}
					.sidebar-card > button {
						width: 100%;
					}

					.price-section .monthly-price .price {
						font-size: 36px;
						font-weight: 700;
					}
					.price-section .monthly-price .month {
						font-size: 16px;
						font-weight: 700;
					}
					.price-section .yearly-price .text {
						font-size: 15px;
						color: #31363a;
						line-height: 20px;
					}
				`}
			</style>

			<Footer />
		</div>
	);
}
