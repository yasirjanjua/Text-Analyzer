// your code here!
var normalizeText  = function(text){
	return text.toLowerCase().trim();
}

var tokenizer = function(text){
	return text.replace('/\r?\n|\r/','').split(' ');
}

var countAvgWordLength = function(token){
	var str = token.join("");
	return (str.length/token.length).toFixed(2);
}

var uniqueWordCount = function(token){
	var match = [];
	for(var i = 0; i < token.length; i++){
		if(match.indexOf(token[i]) === 	-1){
			match.push(token[i]);
		}
	}

	return match.length
}

var renderResults = function(text){
	var tokens = tokenizer(normalizeText(text));

	$('.hidden').removeClass();
	$('dl').find('.js-word-count').text(tokens.length);	
	$('dl').find('.js-unique-word').text(uniqueWordCount(tokens));	
	$('dl').find('.js-avg-length').text(countAvgWordLength(tokens));	
}

var getSubmit = function(){
	$('#user-text').submit(function(event){
		event.preventDefault();
		var str = $('.js-user-text').val();
		console.log(str);

		renderResults(str);
	})
} 

$(function(){
	getSubmit();	
}) 

