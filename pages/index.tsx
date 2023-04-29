import { AppHead } from '../components/AppHead';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<AppHead>
				<title>WP Remake</title>
			</AppHead>
			<Header activeMenu="home" />

			<Content>
				<div className="plugins-list">
					<div className="item">
						<a href="#" className={styles.card}>
							<div className="column-1">
								<div className="thumbnail">
									<img
										src="/site/pibw-logo-white-bg.png"
										alt="pdf invoice builder logo"
										width={200}
									/>
								</div>
							</div>
							<div className="column-2">
								<h3>PDF Invoice Builder for WooCommerce</h3>
								<p>
									With this powerful WooCommerce extension, you can easily
									design custom invoices and packing slips with any layout you
									desire, all through the user-friendly Gutenberg editor. Say
									goodbye to rigid templates and hello to a more flexible and
									efficient way of creating professional-looking documents that
									perfectly match your brand. Our plugin streamlines the entire
									invoicing and packing slip creation process, saving you
									valuable time. Try our plugin today and take your invoicing to
									the next level!
								</p>
								<span className="read-more">Read More</span>
							</div>
						</a>
					</div>
				</div>
			</Content>

			<style jsx>
				{`
					.plugins-list .item > a {
						padding-bottom: 45px;
					}
					.plugins-list .item > a .read-more {
						color: #0070f3;
						font-size: 18px;
						font-weight: bold;
						display: inline-block;
						margin-top: 16px;
						border-bottom: 2px solid transparent;
					}
					.plugins-list .item > a:hover .read-more {
						border-bottom: 2px solid #0070f3;
					}
				`}
			</style>

			<Footer />
		</div>
	);
}
