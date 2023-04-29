import { AppHead } from '../components/AppHead';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<AppHead>
				<title>WP Remake</title>
			</AppHead>
			<Header activeMenu="home" />

			<main className="site-page-content">
				<div className="plugins-list">
					<div className="item">
						<a href="#" className={styles.card}>
							<div className="column-1">
								<div className="thumbnail">
									<img src="/pibw-logo-white-bg.png" alt="" width="200px" />
								</div>
							</div>
							<div className="column-2">
								<h3>PDF Invoice Builder for WooCommerce</h3>
								<p>
									Eu minim deserunt et magna. In anim enim reprehenderit dolore
									consequat id voluptate velit deserunt esse. Voluptate duis
									sunt nisi sit aliqua in cillum anim reprehenderit labore.
									Deserunt adipisicing culpa proident qui culpa. Reprehenderit
									aliquip officia est cupidatat fugiat magna Lorem duis nostrud.
								</p>
								<span className="read-more">Read More</span>
							</div>
						</a>
					</div>
				</div>
			</main>

			<style jsx>
				{`
					.site-page-content {
						max-width: 1160px;
						margin-left: auto;
						margin-right: auto;
						padding: 80px 0;
					}

					@media (min-width: 768px) {
						site-page-content {
							max-width: 750px;
						}
					}
					@media (min-width: 992px) {
						site-page-content {
							max-width: 940px;
						}
					}
					@media (min-width: 1200px) {
						site-page-content {
							max-width: 1160px;
						}
					}

					.plugins-list .item > a {
						padding-bottom: 45px;
					}
					.plugins-list .item > a .read-more {
						color: #0070f3;
						font-size: 18px;
						font-weight: bold;
						display: inline-block;
						margin-top: 16px;
						border-bottom: 1px solid #0070f3;
					}
				`}
			</style>

			<Footer />
		</div>
	);
}
