// const http = require("http");

// const server = http.createServer((req,res)=>{

//     if(req.url==='/'){
//     res.write("hello worls");
// res.end();}
// if(req.url==='/api/user'){
//     res.write(JSON.stringify([1,2,3,4]));
//     res.end();
// }

// });
// server.listen(3000);

var person=[
    {
    id:1,
    name:"ali",

},
{
id:2,
name:"zahid",

},
{
id:3,
name:"muslam",


},
];

var user={
    id:"1",
    name:"asad",
}

const express = require("express");
const app = express();
app.use(express.json());
const fs = require('fs');
const Joi = require('joi');
const base64 = require('base64-to-image');
const buff =require("buffer");
var base64Img = require('base64-img');
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        cb(null, new Date().toISOString()+ file.originalname+"");

    }
});
const uplads = multer({storage:storage});



function encode_base64(filename){
   

    return data;

}

app.post('/uploads/file',uplads.single('userImage'),(req,res,next)=>{
    const file = req.file;
console.log(file);
    obj ={
        name:req.body.name,
        add:req.body.add,
        image:file,
    }
   // console.log(obj);
res.send('uplads');
});
app.get('/',(req,res,next)=>{
    res.send("hello worls");
    

});

   


app.get('/images',(req,res)=>{
    let picName="pic.jpg";
    var d={
        gg:"jjj",
    };
    var data;
    try{
  data =base64Img.base64Sync(`./images/${picName}`);
} catch(e){
    res.status('404').send(" resourse not found");
return;
}
    let mdata={
      name:picName,
      image:data,
    }; 

    
    res.send(JSON.stringify(mdata));
    res.end;

});


app.get('/images/:im',(req,res)=>{
    let picName=req.params.im
   
  
    try{
    var data =base64Img.base64Sync(`./images/${picName}`);
} catch(e){
    res.status('404').send(" resourse not found");
return;
}
    let mdata={
      name:picName,
      image:data,
    }; 

    
    res.send(JSON.stringify(mdata));
    res.end;

});

app.get('/api/users',(req,res)=>{
    res.send(JSON.stringify(user));
});


app.get('/api/user/:id',(req,res)=>{
    
 const user = person.find(c=>c.id ===parseInt(req.params.id));
 if(!person) res.status(404).write(" no user found");
    res.send(user);
});

app.post('/api/adduser',(req,res)=>{
   console.log(req.params);
   res.send("hi from server");
});


//post

app.post('/api/user',(req,res)=>{  

    
 if(!req.body.name || req.body.name.length<4){
     res.status(4004).send(" name is missing or lenght < 4 char");
     return;

 }

 if(!req.body.address || req.body.address.length<4){
    res.status(4004).send("address is missing or lenght < 4 char");
    return;

}
if(!req.body.age){



    res.status(4004).send(" age is missing");
    return;

}
   const user={};
    user.id=person.length+1;
    user.name =req.body.name;
   
    person.push(user);
    console.log(user);
    res.write(JSON.stringify(user));

    //res.write(JSON.stringify(req.body));
    res.end();
});


//port
// set port run this on trimanl
// export PORT =500;
const port = process.env.PORT || 3000;

app.listen(port);
