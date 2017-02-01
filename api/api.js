var express = require('express');
var router = express.Router();
var request = require ('request');
var Promise = require("bluebird");

router.get('/', function(req, res) {
	res.send('hello world');
})


// with js callback

// router.get('/giphy/:searchtxt', function(request, response) {
// 	var giphyData;
// 	// res.send('i am in server');
// 	getGiphy(request.params.searchtxt, function(data) {
// 		giphyData = data;
// 		response.send(giphyData)
// 	})
// })


// function getGiphy(searchString, callback) {
// 		var element;
// 	request('http://api.giphy.com/v1/gifs/search?q=' + searchString + '&api_key=dc6zaTOxFJmzC&limit=5', function(req, res) {
// 		// console.log(res);
// 		var resdata = JSON.parse(res.body);
// 		resdata.data.forEach(function(ele) {
// 			element = {
// 				rating: ele.rating,
// 				image: ele.images.fixed_height.url
// 			}
// 			callback(element)
// 		})
// 	})
// }


// with promise


router.get('/giphy/:searchtxt', function(request, response) {
	getGiphy(request.params.searchtxt).then(function(data) {
		// console.log(data);
		response.send(data);
	})
})


function getGiphy(searchString) {
		var element = [];
	return new Promise(function(resolve, reject) {
		request('http://api.giphy.com/v1/gifs/search?q=' + searchString + '&api_key=dc6zaTOxFJmzC&limit=5', function(err, res) {
			if (err) reject (err);
			else {
				var resdata = JSON.parse(res.body);
				resdata.data.forEach(function(ele) {

					ele = {
						rating: ele.rating,
						image: ele.images.downsized_medium.url
					}
					element.push(ele);
				})
				resolve(element)
			}
		})
	})
}

module.exports = router;