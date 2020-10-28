var express = require('express');
const dbCon = require('../models/databaseCon');
var router = express.Router();
var dbConnection=require('../models/databaseCon')
var mqtt;
var taskQueue=[]

/* GET home page. */
router.get('/',(req,res,next)=>{
 res.render('index', { title: 'Express' });

});
 router.get('/task', function(req, res, next) {
  console.log("Taskqueue Contains "+taskQueue[0])
  if(taskQueue.length>0){
   var task= taskQueue[0]
    taskQueue=[]
  }
  //
 return res.send({task});

 });

router.post('/device',(req,res,next)=>{
  let device=req.body.device;
  let command=req.body.command;
  let user=req.body.user;
  var task="d="+device+"c="+command 
  taskQueue.push(task)
 // console.log("pushed  "+task)
   console.log("Added this to taskQueue "+taskQueue)
 return res.send({hello:thre})
  }
  )
router.post('/routine',(req,res,next)=>{
  let routine=req.body.device;
  let command=req.body.command;
  var task="r="+routine+"c="+command
  taskQueue.push(task)
  console.log("Set routine "+routine +" to "+command )
  
})
router.post('/status',(req,res,next)=>{
  let status=req.body.status;
  console.log(device)
})

module.exports = router;
