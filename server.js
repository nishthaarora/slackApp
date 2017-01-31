var express = require('express')
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
	res.send('hello world');
})


app.get('/giphy', function(req, res) {
	res.send('this is giphy url');
})

app.listen(port, function() {
	console.log('listening on port ' + port);
});