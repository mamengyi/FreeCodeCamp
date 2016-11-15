
<?php 
header('Content-type: application/json'); //告诉接收数据的对象此页面输出的是json数据

//json数据
$quotes = '[{
		"quote": "If you can\'t get rid of the skeleton in your closet, you\'d best teach it to dance.",
		"author": "George Bernard Shaw"
	},
	{
		"quote": "We\'ll always have Paris.",
		"author": "Casablanca"
	},
	{
		"quote": "A mathematician is a device for turning coffee into theorems.",
		"author": "Paul Erdos"
	},
	{
		"quote": "Do, or do not. There is no \'try\'.",
		"author": "Star Wars: Empire Strikes Back"
	},
	{
		"quote": "Some cause happiness wherever they go; others, whenever they go.",
		"author": "Oscar Wilde"
	},
	{
		"quote": "Problems worthy of attack prove their worth by fighting back.",
		"author": "Paul Erdos"
	},
	{
		"quote": "Maybe this world is another planet\'s Hell.",
		"author": "Aldous Huxley"
	}]';

//输出jsonp格式的数据

echo $_GET['callback'] . "(" .  $quotes . ")";
?> 

