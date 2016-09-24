function getNextObject(className, current, isRight) {
	var next = isRight ? current.next() : current.prev();
	if(next.length == 0) {
		next = isRight ? $(className).first() : $(className).last();
	}
	return next;
}

function moveObject(activeName, className, isRight, fade) {
	var currentObject = $('.'+ activeName);
	var nextObject = getNextObject(className, currentObject, isRight);
	if(fade == true) {
		currentObject.fadeOut(600);
		nextObject.fadeIn(600);
	}
	currentObject.removeClass(activeName);
	nextObject.addClass(activeName);
}

function moveSlide(isRight) {
	moveObject('active-slide', '.slide', isRight, true);
}

function moveDot(isRight) {
	moveObject('active-dot', '.dot', isRight, false);
}

function moveScreen(isRight) {
	moveSlide(isRight);
	moveDot(isRight);
}

var main = function(){
	$('.dropdown-toggle').click(function(){
		$('.dropdown-menu').toggle();
	});
	$('.arrow-next').click(function(){
		moveScreen(true);
	});
	$('.arrow-prev').click(function(){
		moveScreen(false);
	});
};
$(document).ready(main);