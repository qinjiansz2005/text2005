$(function(){
    var home = template('goodsList',{
    'list':goods
    })
    
    $('#goods').html(home);
// 渲染2
    var Twos = template('goodsList2',{
    'list':goods
})
    $('#firsts').html(Twos)
// 渲染3
    var Three = template('goodsList3',{
    'list':goods
})
    $('#three').html(Three)
})