var express = require('express');
var router = express.Router();
const userModel= require("./users")
/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index');
});
router.get("/create",async function(req,res){
  // let userdata = await userModel.create({
  //   username:"harashi",
  //   nickname:"harshoy",
  //   description:"i am 25 i like everything about js",
  //   categories:['js','node','javascript','backend','react']
    
  // });
  // res.send(userdata)
})

router.get("/find",async function (req,res){
  var regex = new RegExp("^harsh$","i");
  let user = await userModel.find({username:regex});
  res.send(user)
})
module.exports = router;
 