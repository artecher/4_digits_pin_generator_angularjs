/**
 * Created by ethan on 2014/7/22.
 */
var imgWidth = 300;
$(window).ready(function() {

    var slideLength = $("ul.slideshow li img").length;
   //set the width of the div



    $("div#slideshow").width(imgWidth);
    $("ul.slideshow").width(imgWidth*slideLength);


    var curPos = 0;

    $("a#prev").click(function(e){
        e.preventDefault();//很重要，如果没有，页面每次重读，就没有slideshow效果
        curPos --;
        curPos = curPos<0?slideLength-1:curPos;
        computePos(curPos);
    });

    $("a#nex").click(function(e) {
        curPos++;
        curPos = curPos%slideLength;
        computePos(curPos);
        return false;//也可以用return false来停止default和propogation
    });

});

function computePos(currentIdx) {
    var pos = 0 - imgWidth*currentIdx;
    console.debug(pos);
    $("ul.slideshow").animate({"left":pos},1000);
}


