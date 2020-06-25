const app = require('express')();
var path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get("/",function(req, res) {
    res.render("index", {})
})

app.get("/setup" ,function(req,res) {
    res.send("Setup is successful")
})

app.listen(3000, function() {
    console.log("Server Starting");
})