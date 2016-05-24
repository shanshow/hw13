var main = function() {
	$(".button").hover(function() {
    $(this).toggleClass("active");

		//$(this).toggleClass("posmove");
  });
	$("nav .hamburger").click(function() {
    var $ul = $(this).parent("nav").children("ul");
		// if section is already active and clicked again
		if ( $ul.hasClass("menu-click") ) {
			$ul.removeClass("menu-click");
			$ul.slideUp();
		} else {
		// if section is made active
			$ul.addClass("menu-click");
			$ul.slideDown();
			return false;
		}
	});


		$(".button").mouseover(function() {
			$(this).animate({
				width: "150px"
			},
			90).addClass("posmove za");
	  });
				$(".button").mouseout(function() {
					$(this).animate({
						width: "120px"
					},
					90).removeClass("posmove za");
				});

				$(".buttonh").mouseover(function() {
					this.addClass("overlay");
				});
						$(".buttonh").mouseout(function() {
							this.removeClass("overlay");
						});

  $(".button p").hover(function(){

		$(this).toggleClass("colorChange");
	});
	$(".button p a").hover(function(){

		$(this).toggleClass("colorChange");
	});

	$("#pictureRJ").hover(function() {
		$("#shooter").fadeToggle(300).toggleClass("displaynone");
	});
};


$(document).ready(main);
