//	Server
//	The server has been named app.js (Use server.js in the future for less confusion)

//	Requiring the package express
var express = require("express");
//	Requiring the use of a path
var path = require("path");
//	Putting everything from the downloaded package (express) into our server called app
var app = express();
//	Requiring the body parser will allow the .json data to be easily read by NODE
var bodyParser = require("body-parser");
//	Requiring the json data
var data = require("./data/stock");
//	Requiring cors
var cors = require("cors");

//	Allowing NODE to easily read the .json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//	Starting th server
app.use(function(request, response, next){
	//	Displaying the get request for the different URLS used within the project
	console.log(`${request.method} request for ${request.url}`);
	next();
});

//	Stating that we want to use (app)
app.use(express.static("./public"));
//	Using NPM to add jQuery
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
//	Using npm to add Bootstrap (Javascript and CSS Files)
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')));
//	Requesting/Getting the json data from the data file
app.get("/stock", function(request, response){
	response.json(data);
});
//	Link to About Page
app.get("/about", function(request, response){
	response.sendFile(path.join(__dirname + '/public/about.html'));
});
//	Link to Contact Page
app.get("/contact", function(request, response){
	response.sendFile(path.join(__dirname + '/public/contact.html'));
});
//	Link to Shopping Page
app.get("/shop", function(request, response){
	response.sendFile(path.join(__dirname + '/public/shop.html'));
});
//	Allowing the server to be crossed domained
app.use(cors());
//	Displaying the data inside the terminal
console.log(data);
//	Running the server on port 3000
app.listen(3000);
//	Saying that the server is running on port 3000
console.log("Server running on port 3000");