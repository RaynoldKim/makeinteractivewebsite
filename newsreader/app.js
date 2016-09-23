

function showArticle()
{
	$('.description').hide();
	$('.current').children('.description').show();
}

function selectArticle(article)
{
	$('.article').removeClass('current');
	article.addClass('current');
}

var main = function(){

	showArticle();

	$('.article').click(function(){
		selectArticle($(this));
		showArticle();
	});
	
	$(document).keypress(function(event){
		if(event.which === 110) {
			selectArticle($('.current').next());
		}
		else if(event.which === 109) {
			selectArticle($('.current').prev());
		}
		else if(event.which === 111) {
			showArticle();
		}
	});

};

$(document).ready(main);