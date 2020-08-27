$(function(){
    
    var Go = $('.confirm').eq(1)
    Go.click(function(){
      window.location="car.html"
    })
    
  $('.cancel').click(function(){
    $('.dialog-box').toggle()
    $('.dialog-mask').css('display','none')

  })
  
  $('.icon-dialog-close').click(function(){
    $('.dialog-box').toggle()
    $('.dialog-mask').css('display','none')
  })
  console.log($('.gotop'))
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