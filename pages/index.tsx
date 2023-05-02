import { AppHead } from '../components/AppHead';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<AppHead>
				<title>WP Remake</title>
			</AppHead>
			<Header activeMenu="home" />

			<Content>
				<div className="hero">
					<h1 className="hero-message">We Create Amazing WordPress Plugins</h1>
				</div>
				<div className="plugins-list">
					<div className="plugin-item">
						<div className="column-1">
							<div className="thumbnail">
								<img
									src="/site/pibw-logo-white-bg.png"
									alt="pdf invoice builder logo"
									className="thumbnail"
								/>
							</div>
						</div>
						<div className="column-2">
							<a href="#">
								<h3 className="title">PDF Invoice Builder for WooCommerce</h3>
							</a>
							<p className="description">
								With this powerful WooCommerce extension, you can easily design
								custom invoices and packing slips with any layout you desire,
								all through the user-friendly Gutenberg editor. Say goodbye to
								rigid templates and hello to a more flexible and efficient way
								of creating professional-looking documents that perfectly match
								your brand. Our plugin streamlines the entire invoicing and
								packing slip creation process, saving you valuable time. Try our
								plugin today and take your invoicing to the next level!
							</p>
							<a href="#" className="read-more">
								Read More
							</a>
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
				`}
			</style>

			<Footer />
		</div>
	);
}
