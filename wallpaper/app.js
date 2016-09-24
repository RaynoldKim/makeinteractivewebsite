


var main = function() {

	$('.status-box').val('');
	$('.btn').addClass('disabled');

	$('.btn').click(function(){
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');

		$('.status-box').val('');
		$('.counter').text(140);
		$('.btn').addClass('disabled');
	});

	$('.status-box').keyup(function(){
		var postLength = $(this).val().length;
		var leftLength = 140 - postLength;

		if(leftLength >= 0 && leftLength < 140) {
			$('.btn').removeClass('disabled');
		} else {
			$('.btn').addClass('disabled');
		}
		$('.counter').text(leftLength);
	});
};

$(document).ready(main);