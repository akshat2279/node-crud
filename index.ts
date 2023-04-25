// const express = require('express')
import  express  from "express"
import add from "./save";
import{get,getpro,delpro,update} from "./save"
import { validateUser } from "./validate";
const jwt = require('jsonwebtoken');
const app = express()
const port = 5000
const secretKey ="secretKey";
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello ts   World!')
})


app.post('/about', validateUser,(req, res) => {
//  console.log(req.body)
 add(req.body);
 res.sendStatus (200)
})

app.get('/send',(req,res)=>{

   res.send(get());
})
app.get('/send/:id',(req,res)=>{
    getpro(req.params.id)
    res.sendStatus (200)
    
 })
 app.get('/send/del/:id',(req,res)=>{
    delpro(req.params.id)
    res.sendStatus (200)
    
 })
app.put('/update/:id',(req,res)=>{
   update(req.params.id,req.body.params)
})
app.post('/login',(req,res)=>{
   const user ={
      id:1,
      name:'abcd',
      email:'abcd@gmail.com'
   }

   const jsontoken = jwt.sign({user},secretKey,{expiresIn:'300s'})

   res.send({token: jsontoken})
})

app.get('/profile',verifya,(req:any,res)=>{
   //console.log('reqtojen', req.token)
   jwt.verify(req.token,secretKey,(err:any)=>{
             if(err){
               res.send('not valid')
             }else{
               res.send(
                 "token verified",
                  

               )
             }
   })

})
function verifya(req: any,res: any,next: any){
     const head = req.headers['authorization']

     console.log("header",head);
     
     if(typeof head !== 'undefined'){
          const b = head.split(' ')[1];
         console.log('b->',b)
          //console.log("tokenssssss");
          //console.log("token", token);
          
           //console.log("token->",head);
          req.token = b;
          //return b;
          next();
     }else{
          res.send("fuction->" ,'not valid user')
     }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 