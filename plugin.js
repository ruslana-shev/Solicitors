;(function ($){
	var moreOptionBtn = $('.more-option-btn');
	var moreOptionForm = $('.more-option-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
		moreOptionForm.toggleClass('open');
		moreOptionBtn.toggleClass('open');
	});
}) (jQuery);
/*;(function ($){
	var serchIcBtn = $('.serch-ic-btn');
	var serchIcForm = $('.serch-ic-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
		moreOptionForm.toggleClass('open');
		moreOptionBtn.toggleClass('open');
	});
}) (jQuery);*/