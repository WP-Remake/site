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

	jQuery('.pibw-docs-link').on('click', function () {
		if (jQuery('.pibw-docs-link').attr('href') !== doc_url) {
			window.location.href = doc_url;
		}
	});

	jQuery('.pibw-demo-link').on('click', function () {
		if (jQuery('.pibw-demo-link').attr('href') !== demo_url) {
			window.location.href = demo_url;
		}
	});
}

if (window.jQuery) {
	run();
} else {
	console.error('jQuery is not ready!');
	document.getElementById('jquery-script').addEventListener('load');
}
