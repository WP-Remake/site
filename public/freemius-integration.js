setTimeout(() => {
	var handler = FS.Checkout.configure({
		plugin_id: '12611',
		plan_id: '21289',
		public_key: 'pk_d426ac1cf9565c55962d88b775023',
		image: 'https://wp-remake.github.io/site/pibw-logo-white-bg.png',
	});

	$(document.body).on('click', '#purchase', function (e) {
		handler.open({
			name: 'PDF Invoice Builder for WooCommerce',
			licenses: 1,
			purchaseCompleted: function (response) {},
			success: function (response) {},
		});
		e.preventDefault();
	});
}, 10);
