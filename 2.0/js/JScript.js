$(function(){
	var gameMenuIO = 0,
	gameBtn = $("#games"),
	gameMenu = $("#game-menu"),
	gameMenuLeft = $("#game-menu-left"),
	gameMenuRight = $("#game-menu-right");
	
	gameBtn.click(function(){
		if(gameMenuIO == 0){
			gameMenuIO = 1;
			gameMenu.animate({
				top: '+=140px'
			},500);
			gameMenu.addClass("mySlideDown").removeClass("mySlideUp").addClass("finalboxshadow");
			gameMenuLeft.delay(600).animate({opacity: 1},{duration:300, queue: true});
			gameMenuRight.delay(600).animate({opacity: 1},{duration:300, queue: true});
		}
		else{
			gameMenuIO = 0;
			gameMenu.animate({
				top: '-=140px'
			},500);
			gameMenu.addClass("mySlideUp").removeClass("mySlideDown").removeClass("finalboxshadow");
			gameMenuLeft.animate({opacity: 0},{duration:200, queue: false});
			gameMenuRight.animate({opacity: 0},{duration:200, queue: false});
		}
	});
	
	gameMenuLeft.hover(function(){
		$(this).animate({
			borderColor: "white"
		}, {
			duration: 250,
			queue: false
		});
	}, function(){
		$(this).animate({
			borderColor: "rgb(255, 199, 14)"
		}, {
			duration: 250,
			queue: false
		});
	});
	
	gameMenuRight.hover(function(){
		$(this).animate({
			borderColor: "white"
		}, {
			duration: 250,
			queue: false
		});
	}, function(){
		$(this).animate({
			borderColor: "rgb(255, 199, 14)"
		}, {
			duration: 250,
			queue: false
		});
	});

	var scrollHandle = 0,
	scrollStep = 10,
	parent = $("#game-menu");

	//Start the scrolling process
	$(".panner").on("mouseenter", function(){
		var data = $(this).data('scrollModifier'),
		direction = parseInt(data, 10);
		
		if(gameMenuIO == 1){
			startScrolling(direction, scrollStep);
		}
	});

	//Kill the scrolling
	$(".panner").on("mouseleave", function(){
		stopScrolling();
	});

	//Actual handling of the scrolling
	function startScrolling(modifier, step){
		if(scrollHandle === 0){
			scrollHandle = setInterval(function(){
				var newOffset = parent.scrollLeft() + (scrollStep * modifier);

				parent.scrollLeft(newOffset);
			}, 10);
		}
	}

	function stopScrolling() {
		clearInterval(scrollHandle);
		scrollHandle = 0;
	}

});