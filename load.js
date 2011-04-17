baseline_checker_bookmarklet = (function() {
	function include_css(filename) {
		var css = document.createElement('link');

		css.setAttribute('rel', 'stylesheet');
		css.setAttribute('href', filename);
		css.setAttribute('type', 'text/css');

		document.getElementsByTagName('head')[0].appendChild(css);
	}

	function include_js(filename) {
		var js = document.createElement('script');

		js.setAttribute('type', 'text/javascript');
		js.setAttribute('src', filename);

		document.getElementsByTagName('head')[0].appendChild(js);
	}

//	version = Math.random();
	version = '1.0';
	domain = 'http://scribu.net/tools/baseline-checker/';

	include_css(domain + 'style.css?ver=' + version);

	if (typeof jQuery == 'undefined')
		include_js('http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js');

	include_js(domain + 'script.js?ver=' + version);

	baseline_checker_bookmarklet.domain = domain;
});
baseline_checker_bookmarklet();
