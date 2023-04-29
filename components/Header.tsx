import { AppHead } from './AppHead';
import Logo from './Logo';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
	activeMenu?: string;
}

const Header: React.FC<Props> = (props) => {
	const { activeMenu } = props;

	return (
		<div>
			<style>
				{`
				:root {
					--brand-color: #267691;
					--link-color: #0070f3;
				}
				`}
			</style>
			<AppHead />

			<header className="site-header">
				<div className="header-content">
					<div className="left-column">
						<div className="logo-container">
							<Logo
								svgProps={{
									style: { color: 'black', width: '80px' },
								}}
							/>
							<span className="text">WP Remake</span>
						</div>
					</div>
					<div className="right-column">
						<nav className="menu">
							<ul>
								<li>
									<Link
										href="/"
										className={classNames({
											active: activeMenu === 'home',
										})}>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/support"
										className={classNames({
											active: activeMenu === 'support',
										})}>
										Support
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<style>
						{`
							.right-column .menu ul {
								list-style: none;
								display: flex;
							}
							.right-column .menu ul li {
								padding: 0 18px;
								font-size: 18px;
							}
							.right-column .menu ul li a {
								display: flex;
								justify-content: center;
								align-items: center;
								text-decoration: none;
								color: black;
							}
							.right-column .menu ul li a.active {
								color: var(--link-color);
							}
							`}
					</style>
				</div>
			</header>

			<style jsx>
				{`
					.site-header {
						border-bottom: 1px solid #eaeaea;
						padding: 40px 0;
					}
					.header-content {
						max-width: 1160px;
						margin-left: auto;
						margin-right: auto;
						display: flex;
						flex-direction: row;
						align-items: center;
					}
					.header-content > .left-column {
						flex: 1;
					}
					@media (min-width: 768px) {
						.header-content {
							max-width: 750px;
						}
					}
					@media (min-width: 992px) {
						.header-content {
							max-width: 940px;
						}
					}
					@media (min-width: 1200px) {
						.header-content {
							max-width: 1160px;
						}
					}

					.logo-container {
						display: flex;
						align-items: center;
					}
					.logo-container .text {
						font-size: 30px;
						font-weight: bold;
						margin-left: 30px;
						background: -webkit-linear-gradient(45deg, black, #267691 80%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				`}
			</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}
				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export default Header;
