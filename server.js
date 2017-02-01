var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var api = require('./api/api');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/api', api);

app.listen(port, () => {
	console.log('listening on port ' + port);
});