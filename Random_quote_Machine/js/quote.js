
var quote=function(){
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', 
'#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
        quote,
        author,
        update=function(){
            var index=Math.floor(Math.random()*(colors.length-1));
            $.getJSON("http://localhost/Random_quote_Machine/quotes.php?callback=?",function(data){
                var num=Math.floor(Math.random()*(data.length-1));
                quote=data[num].quote;
                author=data[num].author;
                $(".wrap").fadeOut(600,function(){
                    $(".quo").html(quote);
                    $(".auth").html(author);
                    $("body, .quote-box button").css("background-color",colors[index]);
                    $(".wrap").css("color",colors[index]);
                }).fadeIn(600);
            });
        },
        init=function(){
            $(".update").click(update);
            $(".tweet").click(function(){
                window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(quote)+"——"+encodeURIComponent(author),"_blank");
            });
        };
        return function(){
            update();
            init();
        }    
}();
$(document).ready(function(){
    quote();
});
