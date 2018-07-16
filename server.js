var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path')


var port = process.env.PORT || 8080;



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
	console.log("home page");
	response.render('home')
})

app.get('/legs', function(request, response){
	
	response.render('legs')
})

app.get('/arms', function(request, response){
	response.render('arms')
})

app.get('/chest', function(request, response){
	response.render('chest')
})

app.get('/back', function(request, response){
	response.render('back')
})


app.get('/shoulders', function(request, response){
	response.render('shoulder')
})

app.listen(port, function(){
	console.log("Our app is running on http://localhost:" + port)
})