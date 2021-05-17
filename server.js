const express = require("express");

const app = express();

app.get("/", function(res){
  response.send("<h1>Hello World</h1>");
});

app.get("/about", function(res){
  response.send("<h1>Sahana</h1><P>This is preety hard to understand");
});

app.listen(3000, function(){
  console.log("server has started on port 3000");
});
