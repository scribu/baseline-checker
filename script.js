(function($) {
	domain = baseline_checker_bookmarklet.domain;
	$box = $('<div id="baseline-checker-box">').appendTo($('body'));

	$close_icon = $('<img id="baseline-checker-close" width="13" height="13" alt="close" src="' + domain + 'close.png">')
		.appendTo($box)
		.click(function(){
			$box.remove();
			$('#baseline-checker').remove();
			$(document).unbind('click', choose_ref);
			$(document).unbind('mouseover', highlight).unbind('mouseout', unhighlight);
		});

	$clear = $('<span style="cursor:pointer">Clear</span>').appendTo($box)
		.hide()
		.click(function(){
			$('#baseline-checker').remove();

			$clear.hide();
			$info.show();

			$(document).bind('mouseover', highlight).bind('mouseout', unhighlight);

			return false;
		});

	$info = $('<span>Choose reference</span>').appendTo($box);

	$info_icon = $('<img id="baseline-checker-info" width="13" height="13" title="Baseline Checker Bookmarklet" alt="info" src="' + domain + 'info.png"/>')
		.appendTo($box)
		.click(function(){
			window.open("http://scribu.net/util/baseline-checker-bookmarklet.html");
		});

	function highlight(ev) {
		$el = $(ev.target);

		if ( ! $el.is('#baseline-checker-box, #baseline-checker-box *') )
			$el.addClass('baseline-checker-highlight');
	}

	function unhighlight(ev) {
		$(ev.target).removeClass('baseline-checker-highlight');
	}

	function choose_ref(ev) {
		$el = $(ev.target);

		ev.preventDefault();
		ev.stopPropagation();

		if ( $('#baseline-checker').length )
			return false;

		$clear.show();
		$info.hide();

		$(document).unbind('mouseover mouseout', highlight);

		highlight(ev);

		rhytm = parseFloat($el.css('line-height').replace(/px/, ''));
		offset = $el.offset().top - 1.0;

		while (offset > rhytm)
			offset -= rhytm;

		total_h = Math.round( ($(document).height() - offset) / rhytm );

		container = "<div id='baseline-checker' style='padding-top:" + offset + "px !important'>";

		for (i=0; i<total_h; i++)
			container += '<div style="height: ' + (rhytm-1) + 'px">&nbsp;</div>';

		container += '</div>';

		$('body').prepend(container);
	};

	$(document).bind('click', choose_ref);
	$(document).bind('mouseover', highlight).bind('mouseout', unhighlight);
})(jQuery);
