function run() {
	const doc_url = jQuery('meta[name=pibw-pdf-doc-url]').attr('content');
	const demo_url = jQuery('meta[name=pibw-demo-url]').attr('content');

	jQuery('.pibw-docs-link').attr('href', doc_url);

	jQuery('.pibw-demo-link').attr('href', demo_url);

	jQuery('.pibw-docs-link').hover(function () {
		if (jQuery('.pibw-docs-link').attr('href') !== doc_url) {
			jQuery('.pibw-docs-link').attr('href', doc_url);
		}
	});

	jQuery('.pibw-demo-link').hover(function () {
		if (jQuery('.pibw-demo-link').attr('href') !== demo_url) {
			jQuery('.pibw-demo-link').attr('href', demo_url);
		}
	});
}

if (window.jQuery) {
	run();
} else {
	document.getElementById('jquery-script').addEventListener('load');
}
