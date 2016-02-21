var express = require('express');
var fs = require('fs');
var app = express();


var app = express();
app.set('port', process.env.PORT || 8000);
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/orders', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/dashboard', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/orders.json', function (req, res) {
    res.sendFile(__dirname + '/data/orders.json');
});

app.get('/sales_stats.json',function (req, res){
    res.sendFile(__dirname + '/data/sales_stats.json');
})
/*
 var server = app.listen(app.get('port'), function() {
 console.log('Server up: http://localhost:' + app.get('port'));
 });
 */
var server = app.listen(app.get('port'), function () {

    console.log('StoreKeeper app listening at http://localhost:' + app.get('port'));
});

