//console.log("Hello Node");
// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("hello word");
// });

// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
    
// });

var express = require("express");
var app  = express();

app.get("/",function(req,res){
    res.send("<h1> Hello world</h1>");

});
app.get("/:googl/",function(req,res){
    var n  = req.params.googl.com;
    res.send("<h1> Hello "  + n +  "</h1>");
    });


app.get ("/name/:name",function(req,res){
    var n = req.params.name;
    res.send("<h1>Hello " + n + "</h1>");

});
app.get("/:surname/:name/",function(req,res){
    var n1  = req.params.surname;
    var n  = req.params.name;
    res.send("<h1> Hello " + n1  + n+  "</h1>");
    });

    
app.listen(3000,function(){
    console.log("Example is running on port 3000")
});

