$(document).ready(function(){

var windowWidth = $(window).width();
    var windowHeight = $(window).height();
   // console.log(windowWidth+windowHeight);
    $(".overlay").css({
        "height" : windowHeight + "px"
    });
    
    // $(".showcase-text").children("div").eq(0).click(function(event) {
    //     clearInterval(timer);
    //     $(".overlay").children("iframe").remove();
    //     var domiframe='<iframe src="https://www.youtube.com/embed/Va1UPrFXHKA" frameborder="0" allowfullscreen></iframe>';
    //     $(".overlay").append(domiframe);

    //     event.preventDefault();
    //         //console.log("clicked!");  
    //     $(".overlay").fadeIn(200); 
    //     $(".overlay").children("iframe").attr({
    //         width:900,
    //         height:560
    //     });
    // });//click method
    // $("#closeBtn").click(function(event){
    //     $(".overlay").children("iframe").remove();
    //     event.preventDefault();
    //     timer=setInterval(timer_fn,2000);
    //     $(".overlay").fadeOut();
    // });//click method end
    // $(".cover").children("div").eq(0).click(function(){
    //     $(".showcase-text").children("div").eq(0).click();
    //     $(".overlay").children("iframe").attr({
    //         width:300,
    //         height:180
    //     });
    // });
    // $(".showcase-text1").children("div").eq(0).click(function(event){
    //     $(".overlay").children("iframe").remove();
    //     var domiframe='<iframe src="https://www.youtube.com/embed/NTzycsqxYJ0" frameborder="0" allowfullscreen></iframe>';
    //     $(".overlay").append(domiframe);
    //     event.preventDefault();
    //         //console.log("clicked!");  
    //     $(".overlay").fadeIn(200); 
    //     if(parseInt(windowWidth)<980){
    //          $(".overlay").children("iframe").attr({
    //             width:300,
    //             height:180
    //         }); 
    //     }else{
    //          $(".overlay").children("iframe").attr({
    //             width:900,
    //             height:560
    //         });   
    //     }
    // });
    
    if($("head").children("title").html()!=="Netflix")$(".nav ul").children("li:first-child").children("a").css("text-decoration","none");
  
        $(".showcase span").find("i:nth-child(6)").hover(function(){
            //$(this).show();
            //$(this).next().show();
            //$(this).fadeTo("fast",1);
            clearInterval(timer);
            $(this).css({
                "font-size":"45px",
                opacity:1
            });
        }, function(){
            //$(this).fadeTo("fast",0.5);
            $(this).css({
                "font-size":"40px",
                opacity:1
            });
            timer=setInterval(timer_fn,2000);
        }).click(function(){
            //clearInterval(timer);
            var k=getIndex();
            if(k==0){
                k=4;
            }else{
                k-=1;
            }
            console.log(k);
            //$(".showcase").children("img").css("display","none");
            $(".showcase").children("img").fadeOut("slow");
            //$(".showcase").children("img").eq(k).css("display","inline");
            $(".showcase").children("img").eq(k).fadeIn("slow");

            description();
            $(this).parent().children("i.fa-circle").css("opacity",0.5);
            $(this).parent().children("i.fa-circle").eq(k).css("opacity",1);
            //timer=setInterval(timer_fn,2000);
        });
        $(".showcase span").find("i:last-child").hover(function(){
            clearInterval(timer);
    
            $(this).css({
                "font-size":"45px",
                opacity:1
            });
        }, function(){
            //$(this).fadeTo("normal",0.5);
            $(this).css({
                "font-size":"40px",
                opacity:1
            });
            timer=setInterval(timer_fn,2000);
        }).click(function(){
            description();
            //clearInterval(timer);
            //$(".showcase").children(".description").find("p").html($(".showcase").children("img").eq(getIndex()).attr("alt"));
            var k=getIndex();
            if(k==4){
                k=0;
            }else{
                k+=1;
            }
            console.log(k);
            //$(".showcase").children("img").css("display","none");
            $(".showcase").children("img").fadeOut("slow");
            //$(".showcase").children("img").eq(k).css("display","inline");
            $(".showcase").children("img").eq(k).fadeIn("slow");

            description();
            $(this).parent().children("i.fa-circle").css("opacity",0.5);
            $(this).parent().children("i.fa-circle").eq(k).css("opacity",1);
            //timer=setInterval(timer_fn,2000);
        });
        $(".showcase span").find("i.fa-circle").hover(function(){
            clearInterval(timer);
            //$(this).parent().find(".fa-chevron-left,.fa-chevron-right").show();
            for(var i=0;i<5;i++){
                if($(this)[0]===$(".showcase span").find("i")[i]){
                    //$(".showcase").children("img").css("display","none");
                    if(i!==getIndex())$(".showcase").children("img").fadeOut("slow");
                    //$(".showcase").children("img").eq(i).css("display","inline");
                    $(".showcase").children("img").eq(i).fadeIn("slow");

                    description();
                    //console.log($(this).parent().children("i.fa-circle").eq(i));
                    $(this).parent().children("i.fa-circle").css("opacity",0.5);
                    $(this).parent().children("i.fa-circle").eq(i).css("opacity",1);
                }
            }
        },function(){
            timer=setInterval(timer_fn,2000);
            var i=getIndex();
            //console.log(i);
            $(this).parent().children("i.fa-circle").css("opacity",0.5);
            $(this).parent().children("i.fa-circle").eq(i).css("opacity",1);
        });
        //var timer=setInterval(timer_fn,2000);

    //}

        function getIndex(){
            for(var i=0;i<$(".showcase").children("img").size();i++){
                if($(".showcase").children("img").eq(i).css("display")==="block"){
                    return i;
                }
            }
        }
        function getCircleIndex(){
            for(var i=0;i<$(".showcase span").children("i.fa-circle").size();i++){
                if($(".showcase span").children("i.fa-circle").eq(i).css("opacity")===1){
                    return i;
                }
            }
        }

        function timer_fn(){
            $(".showcase span").find("i:last-child").click();
            //description();
        }
        var timer=setInterval(timer_fn,2000);
        function description(){
            $(".showcase").children(".description").find("p").html($(".showcase").children("img").eq(getIndex()).attr("alt"));
        }




    $(window).contextmenu(function(e){
        e.preventDefault();
        //console.log("("+ e.screenX+","+ e.screenY+")");
    });

    var flag=0;
    $("#navBtn").click(function(){
        if(flag==0) {
            $("header").children(".sidemenu").css("display","block").animate({
                left: "+=117px"
            }, "fast");
            $("header").children(".pop-cover").css({
                height:$("body").css("height"),
                display:"block"
            });
            flag++;
        }else{
            $("header").children(".sidemenu").animate({
                left: "-=117px"
            }, "fast").queue(function(next){
                $(this).css("display","none");
                next();
            });
            $("header").children(".pop-cover").css({
                display:"none"
            });
            flag=0;
        }
    });
    $(".sidemenu ul li:last-child").click(function(){
        $("#navBtn").click();
    });
    $("header").children(".pop-cover").click(function(){
        $("header").children(".sidemenu").animate({
            left: "-=117px"
        }, "fast","linear").queue(function(next){
            $(this).css("display","none");
            next();
        });
        $(this).css("display","none");
        flag=0;
    });
    $(window).resize(function(){
        if($(window).outerWidth()>980){
            $("header").children(".pop-cover").css("display","none");
            $("header").children(".sidemenu").css("display","none");
        }
    });

    $(".list .non-mobile .left div").eq(0).children("img").click(function (){
        window.open("./house-of-cards.html");
    });
    $(".list .mobile .sub-option div").eq(0).children("img").click(function (){
        window.open("./house-of-cards.html");
    });
    $(".list .mobile .sub-option:first-child").find("img").eq(0).click(function (){
        console.log($(this).attr("src"));
    });






});













