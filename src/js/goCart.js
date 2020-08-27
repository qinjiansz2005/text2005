$(function(){
    function getUrlPreams (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
        return unescape(r[2]);
        }
        return null;
    }

    var id = Number(getUrlPreams('id'))
    var goodsDetail = null

    goods.forEach(item => {
        if (item.id === id) {
            goodsDetail = item
        }
    })
var Sp =$('.detail-btn-box').children(0).eq(0)
Sp.click(function(){
    var num = $('.count-input').val();
    if(num ==0){
        alert('商品数量不能为0')
    }
    var car = localStorage.getItem('car')?JSON.parse(localStorage.getItem('car')):[]
    // 存入名字
    var saveData = goodsDetail
    // 保存的数据
    saveData.color =$('.active').text()
    saveData.num =$('.count-input').val()
    // 将goods对象变成字符串存入
    var flag = false;
    car.forEach(function(item,index){
        if(item.id == id){
            car[index].num = Number(car[index].num) + Number(num)
            flag = true;
        }
    })
    if(!flag){
        car.push(saveData)
    }
    var str = JSON.stringify(car)
    console.log(car)
    if(num!=0){
    localStorage.setItem("car",str)
    $('.dialog-box').show()
     $('.dialog-mask').toggle()
}
})

})