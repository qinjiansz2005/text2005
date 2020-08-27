$(function(){
    var list = JSON.parse(localStorage.getItem('car'))
    
    function render(){
        list = JSON.parse(localStorage.getItem('car'));
        var htmlStr = template('cart',{
            'list':list
        })
        $('.tbody').html(htmlStr);
        
    }

    if (list && list.length > 0) {
        render();
       
        $('#enpty').hide()
    } else {
        $('#list').hide()
    }
    
      
    $('.select-square').click(function(){
        if ($(this).hasClass('all-select-square')) {
            if ($(this).hasClass('on')) {
                $('.select-square').removeClass('on')
            } else {
                $('.select-square').addClass('on')
            }
        } else {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on')
            } else {
                $(this).addClass('on')
            }
        }
    }) 
        // 按键功能--
         function getSam(){
             var count = 0;
             var money = 0;
             list.forEach((item,index)=>{
            money += item.num*Number(item.price)
            count += item.num
             })
             console.log(count)
             console.log(money)
             $('.cart-selected-num').text(count)
             $('.cart-total').text(money)
         }
         getSam()
        $('#car-content').on('click','.count-minus',function(){
            console.log($(this))
            var numMinus =  Number($(this).next().val())
            numMinus--
            $(this).next().val(numMinus)
            // 获取id
            list.forEach((item,index)=>{
                if(item.id === Number($(this).attr('id'))){
                list[index].num = numMinus
                var num = list[index].num
                may = num *$(this).next().val()
                $(this).parents().eq(2).children().eq(4).text(may)
                getSam()
            if(numMinus<=0){
                return $(this).siblings().eq(0).val(0)
             }
            }
        })
        localStorage.setItem('car', JSON.stringify(list))
       render();
    
    })
  
      
        $('#car-content').on('click','.count-add',function(){
            console.log($(this).siblings().eq(1).val())
            var adds =$(this).siblings().eq(1).val()
            adds++
            $(this).prev().val(adds)

            list.forEach((item,index)=>{
            if(item.id === Number($(this).attr('id'))){
                list[index].num = adds
                var num = list[index].num
                var may = num *$(this).prev().val()
                $(this).parents().eq(2).children().eq(4).text(may)
                getSam()
                if(list[index].num>10){
                return list[index].num = 10
                }
            }
        })
        localStorage.setItem('car', JSON.stringify(list))
        render();
        
        })  
        
          $('#car-content').on('click','.btn-text',function(){
              console.log(1)
            //   如何走前端删除数据库的id 
            list.forEach((item,index)=>{
                console.log(item.id)
              console.log(Number($(this).attr('id')))
               if(item.id === Number($(this).attr('id'))){
                 list.splice(index,1)
                 console.log(list)
               }
            })
      
            localStorage.setItem('car', JSON.stringify(list))

            if (list && list.length > 0) {
                render();
                $('#enpty').hide()
                $('#list').show()
            } else {
                $('#list').hide()
                $('#enpty').show()
            }
              
          })
        // 结算
        console.log($('.button').eq(0))
        $('.button').eq(0).click(function(){
            alert("还没写的功能")
        })
        
        $('.fr').eq(8).html('你好'+localStorage.getItem('un'));
}) 