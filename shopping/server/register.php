<?php
$username = $_POST['username'];
$password = $_POST['password'];
// 连接数据库
$conn = mysqli_connect('localhost','root','root','music');

//书写sql
$sql = "SELECT * FROM `users` WHERE `username` = '$username'";

// 执行sql
$result = mysqli_query($conn,$sql);

// 解析查询结果
$data = mysqli_fetch_assoc($result);

if($data){
    // 如果查到，说明该用户已经在数据库了，无法注册
    $arr = array('code'=>0,'msg'=>'用户名已被注册');
}else{
    // 如果没查询到 可以注册
    // 书写插入sql语句
    $sql = "INSERT INTO `users` (`username`,`password`) VALUES ('$username','$password')";
    $result = mysqli_query($conn,$sql);
    // 不需要即系，因为结果是布尔值
    if($result){
        $arr = array('code'=>1,'data'=>array('username'=>$username));
    }else{
        $arr = array('code' =>0, 'msg'=>'后端出错了');
    }
    }


// 返回给前端
echo json_encode($arr);

?>