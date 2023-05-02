export default function Content(props) {
	return (
		<>
			<main className="site-page-content">{props.children}</main>

			<style jsx>
				{`
					.site-page-content {
						max-width: 1160px;
						margin-left: auto;
						margin-right: auto;
						padding: 0;
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
				`}
			</style>
		</>
	);
}
