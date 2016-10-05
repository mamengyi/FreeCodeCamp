//邮件发送
function sendEmail(){
	var name=$("[name='name']").val(),
	    email=$("[name='email']").val(),
	    number=$("[name='number']").val(),
	    message=$("[name='message']").val(),
	    body="My Name is: "+name+"%0a%0d"
	        +"My Email Address is: "+email+"%0a%0d"
	        +"My Phone Number is: "+number+"%0a%0d"
	        +"Message:"+"%0a%0d"+message;
	$("#send").attr("href","mailto:mamengyi1121@163.com?body="+body);
	document.getElementById("send").click();
}

//按下键盘显示placehodler
function Cue(e){
	var type=e.type,
	    target=e.target,
	    cue=target.parentNode.getElementsByClassName("cue")[0];
	switch(type){
		case "keyup":
			if (!cue) {
				$('<span class="cue">'+target.placeholder+'</span>').appendTo(target.parentNode).animate({top:-22},300);
			}
			if (!target.value) {
				target.parentNode.removeChild(target.nextSibling);
			}
			break;
		case "focusout":
			if (cue) {
				cue.style.color="#AAA";
			}
			break;
		case "focusin":
			if (cue) {
				cue.style.color="#F7846B";
			}
	}
}
//导航
function toSomeWhere(e){
	var target=e.target,
		name=target.className,
		top=$(document).scrollTop();
	switch(name){
		case "toHome":
			$(document).scrollTop(0);
			break;
		case "toPort":
			$(document).scrollTop(520);
			break;
		case "toCont":
			$(document).scrollTop(2200); 
	}
	if (top>=2000) {
		$(".active").removeClass("active");
		$(".toCont").addClass("active");
	}else if(top>=520){
		$(".active").removeClass("active");
		$(".toPort").addClass("active");

	}else{
		$(".active").removeClass("active");
		$(".toHome").addClass("active");
	}
}

window.onload=function(){
    //导航点击动画
    $(".nav-btn").click(function(){
        $(".nav").slideToggle(500);
    });
    //发送邮件
    $(".btn").click(sendEmail);
    //contact动画
    $(".contact").on("keyup",["input","textarea"],Cue);
    $(".contact").on("focusout",["input","textarea"],Cue);
    $(".contact").on("focusin",["input","textarea"],Cue);
    //导航
    $(".nav").on("click","a",toSomeWhere);
    //滚动改变a的样式
    $(document).on("scroll",toSomeWhere);
}