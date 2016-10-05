//导航
function toSomeWhere(){
	var top=$(document).scrollTop(),
	    portfolio=$("[name='portfolio']").offset().top,
    contact=$("[name='contact']").offset().top;
	if (top>=contact) {
		$(".active").removeClass("active");
		$(".toCont").addClass("active");
	}else if(top>=portfolio){
		$(".active").removeClass("active");
		$(".toPort").addClass("active");
	}else{
		$(".active").removeClass("active");
		$(".toHome").addClass("active");
	}
}

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
				$('<span class="cue">'+target.placeholder+'</span>').appendTo(target.parentNode).animate({top:5},300);
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

window.onload=function(){
    //滚动改变a的样式
    $(document).on("scroll",toSomeWhere);
    //发送邮件
    $(".btn").click(sendEmail);
    //contact动画
    $(".email").on("keyup",["input","textarea"],Cue);
    $(".email").on("focusout",["input","textarea"],Cue);
    $(".email").on("focusin",["input","textarea"],Cue);
}