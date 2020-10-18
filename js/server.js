var express = require("express");

const fs = require("fs"); 

const htmlRoutes = require("../js/htmlRoutes.js");
const apiRoutes = require("../js/apiRoutes.js");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); 

apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
