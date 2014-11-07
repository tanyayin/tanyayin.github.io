

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

$(function(){
	$('.art_aside>ul>li').click(function(){
		$(this).find('.art_aside ul li ul').css('display','block');
	})
	
});
