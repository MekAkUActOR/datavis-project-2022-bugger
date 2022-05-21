// function for change images in imgList
$(function(){
    //global variables
    let cur = 0;    //current index
    imgLen = $(".imgList li").length;  // number of figures
    timer = null;   //timer

    //hovering on "pre"/"next", close the timer
    $(".imgList_pre,.imgList_next").hover(function(){
        clearInterval( timer );
    },function(){
        changeImg( );
    });

    //hovering on figures, close the timer
    $(".imgList").hover(function(){
        clearInterval( timer );
    },function(){
        changeImg( );
    });

    //click on "pre"
    $(".imgList_pre").click(function(){
        cur = cur>0 ? (--cur) : (imgLen-1);
        changeTo( cur );
    });

    //click on "next"
    $(".imgList_next").click(function(){
        cur = cur<( imgLen-1 ) ? (++cur) : 0;
        changeTo( cur );
    });

    //circle button corresponding to different figures
    $(".dollList li").hover(function(){
        clearInterval(timer);
        var index = $(this).index();
        cur = index
        changeTo(cur);
    },function(){
        changeImg();
    });

    //change figures automatically
    function changeImg(){

        timer = setInterval(function(){
            if( cur<imgLen-1 ){
                cur++;
            }else{
                cur=0;
            }
            changeTo( cur );
        },4000);
    }

    changeImg();

    //change figures
    function changeTo( num ){
        var go = num*1600;
        $(".imgList").animate({ "left" : -go },500);
        $(".dollList").find("li").removeClass("sec").eq(num).addClass("sec");

    }

});