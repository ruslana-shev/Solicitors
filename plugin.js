;(function ($){
	var moreOptionBtn = $('.more-option-btn');
	var moreOptionForm = $('.more-option-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
		moreOptionForm.toggleClass('open');
		moreOptionBtn.toggleClass('open');
	});
}) (jQuery);

;(function ($){
	var searchIcBtn = $('.search-ic-btn');
	var searchIcForm = $('.search-ic-form');
	var searchOnSite = $('serch-on-site')

	searchIcBtn.on('click', function () {
		searchIcForm.slideToggle();
		searchIcForm.toggleClass('open');
		searchIcBtn.toggleClass('open');
	});
	
}) (jQuery);