<?php
header('Content-type: text/javascript');
$arr=array('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
$json_data = json_encode($arr);
$jsoncallback = $_GET ['jsoncallback'];
echo $jsoncallback . "(" . $json_data . ")";
?>