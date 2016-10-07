<?php
header('Content-type: application/json');
$jsoncallback = $_GET ['jsoncallback'];
$json_data = '[{
		"quote":"If you can\'t get rid of the skeleton in your closet, you\'d best teach it to dance.",
		"author":"George Bernard Shaw"
	}
	{
		"quote":"We\'ll always have Paris.",
		"author":"Casablanca"
	}
	{
		"quote":"A mathematician is a device for turning coffee into theorems.",
		"author":"Paul Erdos"
	}]';
echo $jsoncallback . "(" . $json_data . ")";
?>