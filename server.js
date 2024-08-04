var http = require('http');
const express=require('express')
const app=express();
app.use(express.json())
const Course=[
  {
    id:1,
    name:'Node.js'
  },
  {
    id:2,
    name:'React.js'
  },
  {
    id:3,
    name:'Angular.js'
  }
]
app.get('/',(req,res)=>{
  res.send('Bạn đang tham gia khóa học Nodejs')
})
app.get('/api/courses/:id',(req,res)=>{
  let course =Course.find((item)=>{return item.id==parseInt(req.params.id)})
  if(!course){
    res.status(404).send('The course with the given ID was not found')
  }
  else{
    res.send(course)
  }
})  
app.post('/api/courses/add',(req,res)=>{
  console.log(req.body)
})  
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>console.log(`Server run on server ${PORT}`))
// const { json } = require('stream/consumers');

// http.createServer(function (req, res) {
//   // res.setHeader('Content-type','application/json')
//   res.writeHead(404,{
//     'Content-type':'application/json',
//     'X-Powered-By':'Node.js'
//   })
//   res.end(JSON.stringify({
//     success:true,
//     data:Course,
//   }));
// }).listen(8080);