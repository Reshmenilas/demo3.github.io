// side menu
function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// sticky menu
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass('black');
  }else{
   $("nav").removeClass('black');
  }
});
// Add active class to the current button (highlight it)
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
// skill bar
$(function(){"use strict";var wind=$(window);
 wind.on('scroll',function(){
   $(".skill_progress span").each(function(){
     var bottom_of_object=$(this).offset().top+$(this).outerHeight();
     var bottom_of_window=$(window).scrollTop()+$(window).height();
     var myVal=$(this).attr('data-value');if(bottom_of_window>=bottom_of_object){
       $(this).css({width:myVal});}});});
});

$(document).ready(function(){
 
 
  // mixitup js
  var mixer = mixitup('.grid');
	// magnific popup js
	 $('.popimg').magnificPopup({
		type: 'image',
		gallery: {
			 enabled: true
		},
		
    });
 
//  counter up
jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.my_counter').offset().top,
        hH = jQuery('.my_counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.count_up').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
				// when add %, + etc...
                    /*$this.text(Math.ceil(this.Counter) + '%');*/
                    $this.text(Math.ceil(this.Counter) + '+');
                }
            });
        });
    }
  }




});

