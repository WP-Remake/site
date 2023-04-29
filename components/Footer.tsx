interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<>
			<footer className="site-footer">
				<span className="text">
					Copyright © 2023 WP Remake. All Rights Reserved.
				</span>
			</footer>

			<style jsx>{`
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	);
};

export default Footer;
