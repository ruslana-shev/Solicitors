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

	searchIcBtn.on('click', function () {
		searchIcForm.slideToggle();
		searchIcBtn.toggleClass('open');
		searchIcForm.toggleClass('open');
	});
	
}) (jQuery);