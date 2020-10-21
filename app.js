const express = require("express")
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

var port = 3000;
app.get("/", function(req,res){
   // res.render("admin_login");
      res.render("admin-login");


});
app.get("/admin_login", function(req,res){
  res.render("admin-login");
});
app.get("/admin_in", function(req,res){ 
    var Name = req.query.name;
    var Password = req.query.pass;
if (Password =="123")
{ 
  console.log("Successfully logged in as admin");
  res.render("admin");
}
else{
    res.render("notfound.ejs");
}
});
var server = app.listen(port, function () {
  console.log("Server listening on " + port);
})
module.exports.app = app;
