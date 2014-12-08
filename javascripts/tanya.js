

/*-------------#top---------------------*/

             $(document).ready(function(){
             $("#back-top").hide();
             $(function () {
             $(window).scroll(function(){
             if ($(window).scrollTop()>150){
             $("#back-top").fadeIn(800);
           }
          else
       {
       $("#back-top").fadeOut(800);
      }
    });
        $("#back-top").click(function(){
         $('body,html').animate({scrollTop:0},1000);
         return false;
       });
     });
    });

/*-------------sticup---------------------*/

      jQuery(function($) {
        $(document).ready( function() {
          $('.pr_header').stickUp({
                        parts: {
                          0:'cunchu',
                          1:'jiasu',
                          2: 'shuju',
                          3: 'kaifa',
                        },
                        itemClass: 'ioc_size',
                        itemHover: 'active',
                        topMargin: 'auto',
                      });
        });
      });
	  

	// $(function(){
	// $(".pr_header a").click( function(){
	//	$(".pr_txt").css('padding-top','200px');
	//	 });
	// });


//---------------------------------------

// JavaScript Document
var handler = null;
//定义基本属性.
var options = {
    autoResize: true,
    container: $('#main'),
    offset: 2,
    itemHeight: 210
};

//定义滚动函数
function onScroll(event) {
    //是否到底部（这里是判断离底部还有100px开始载入数据）.
    var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 100);
    if(closeToBottom) {
        //这里就是AJAX载入的数据
        $.ajax({url:"data.html", dataType:"html", success:function(html){
            //把新数据追加到对象中
            $('#list').append(html);
            //清除原来的定位
            if(handler) handler.wookmarkClear();
            //创建新的wookmark对象
            handler = $('#list dl');
            handler.wookmark(options);
            }
        });
    }
};

$(document).ready(new function() {
    //绑定scroll事件.
    $(document).bind('scroll', onScroll);
    //第一次布局.
    handler = $('#list dl');
    handler.wookmark(options);
});


