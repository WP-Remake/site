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
