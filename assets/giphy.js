var phrase = 'health';

$.get('/api/giphy/' + phrase, function(res) {
	console.log(res);
	res.forEach(function(ele) {
		console.log(ele);
		$('#images').attr('src', ele.image);
	})
})