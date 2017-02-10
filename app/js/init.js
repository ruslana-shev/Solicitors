/*init slick*/
$('.law-slick').slick({
	dots: false,	
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0px',
  responsive:[
  	{
  		breakpoint: 959,
  		settings:{
  			slidesToShow: 3,
  		} 
  	},
  	{
  		breakpoint: 479,
  		settings:{
  			slidesToShow: 1,
  		} 
  	},
  ]
});

/*init formstyle*/
 $('select').styler();
 /*init slick nav*/
 $('.header-nav').slicknav({
    label: '',
    prependTo:'.header .conteiner',
});