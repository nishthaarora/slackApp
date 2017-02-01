import axios from 'axios';

var phrase = 'health';

axios.get('/giphy/' + phrase, function(err, res) {
	console.log(res);
	res.forEach(function(ele) {
		console.log(ele);
		$('#images').append(res.image);
	})
})