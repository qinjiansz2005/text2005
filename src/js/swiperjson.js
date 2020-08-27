$(function(){
var json = [
      {
		'img':"https://mall02.sogoucdn.com/image/2020/04/23/20200423144135_3991.jpg"     
	  },
	  {
		'img':'https://mall02.sogoucdn.com/image/2020/08/21/20200821103706_5185.png'
	  },
	  {
		'img':'https://mall01.sogoucdn.com/image/2020/08/21/20200821103717_5186.png'
	  },
	  {
		'img':'https://mall01.sogoucdn.com/image/2020/06/10/20200610170045_4607.png'
	  },
	  {
		'img':'https://mall01.sogoucdn.com/image/2019/07/16/20190716144209_1677.png'
	  },
	  {
		'img':'https://mall03.sogoucdn.com/image/2020/06/04/20200604173146_4542.png' 
	  },
	  {
		'img':'https://mall01.sogoucdn.com/image/2020/02/28/20200228162042_3226.png'
	  },
	  {
		'img':'https://mall01.sogoucdn.com/image/2020/04/23/20200423144124_3990.png' 
	  },
	  {
		'img':  'https://mall03.sogoucdn.com/image/2020/04/30/20200430141722_4081.png'
	  }
]

// 渲染图片到页面
var htmlStr = template('root-lunbo',{
	'list':json
});
$('.roots').html(htmlStr);
   // 再通过swiper来完成轮播图
  var swiper =  new Swiper('.swiper-container',{
	loop:true,
	autoplay:true,
	// 如果需要小圆点
	pagination: {
		el: '.swiper-pagination',
	},

	// 如果需要左右箭头
	navigation: {
		nextEl: '.icon-swiper-next',
		prevEl: '.icon-swiper-prev',
	}
})
// 渲染产品介绍
// 创建产品
var referrals = [
	{
		img:'https://mall02.sogoucdn.com/image/2020/06/02/20200602170718_4538.jpg',
		name: '搜狗出品 糖猫词典笔',
		state:'随扫随译出好成绩',
		price:'799.00'
	},
	{
		img:'https://mall03.sogoucdn.com/image/2020/05/18/20200518152231_4244.jpg',
		name: '搜狗出品 糖猫词典笔',
		state:'随扫随译出好成绩',
		price:'799.00'
	},
	{
		img:'https://mall03.sogoucdn.com/image/2019/04/28/20190428142916_4846.jpg',
		name: '搜狗出品 糖猫词典笔',
		state:'随扫随译出好成绩',
		price:'799.00'
	},
	{
		img:'https://mall03.sogoucdn.com/image/2019/04/28/20190428142916_4846.jpg',
		name: '搜狗出品 糖猫词典笔',
		state:'随扫随译出好成绩',
		price:'799.00'
	}
]
var reFerral = template('root-referral',{
	'list':referrals
});
$('#product-root').html(reFerral);
// 中部轮播图
var luns = [
	{
	  'img':"https://mall03.sogoucdn.com/image/2020/08/04/20200804143042_4959.jpg"     
	},
	{
	  'img':'https://mall01.sogoucdn.com/image/2019/12/19/20191219164835_2704.png'
	},
	{
	  'img':'https://mall02.sogoucdn.com/image/2020/05/22/20200522182536_4390.jpg'
	}
]
// 渲染图片到页面
var lunB = template('root-lunbo2',{
	'list':luns
});
$('.roots1').html(lunB);
   // 再通过swiper来完成轮播图
  var swiper =  new Swiper('.swiper-container',{
	loop:true,
	autoplay:true,
	// 如果需要小圆点
	pagination: {
		el: '.swiper-pagination',
	},

	// 如果需要左右箭头
	navigation: {
		nextEl: '.icon-swiper-next',
		prevEl: '.icon-swiper-prev',
	}
 })
 $(window).scroll(function(){
	if($(window).scrollTop()>=300){
		$('.gotop').fadeIn()
	}else{
	  $('.gotop').fadeOut()
	}
})
$('.toolbar-btn').eq(2).click(function(){
	$('html').animate({
		scrollTop:0
	},1000)
})
})