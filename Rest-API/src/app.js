const express =require("express")
const mysql=require("mysql")
const app=express();
 const database=require("./db/conn");
 // const student =require("./models/student");
 const path =require("path");
 path.join(__dirname,"../public")
app.use(express.json());

app.get("/student",(req ,res)=>{
    let tablename='StudentData';

   database.query('SELECT * FROM StudentData', function (err, result) {
   if (err) throw err;

  console.log(result);

    });
 res.send("ok");
});
app.post("/student",(req,res)=>{
        var StudentData = {
            Id:req.body.Id,
            City: req.body.City,
            Name: req.body.Name,
          course: req.body.course,
          duration: req.body.duration,
         
         }
         // now the createStudent is an object you can use in your database insert logic.
         database.query('INSERT INTO StudentData SET ?', StudentData, function (err, resp) {
           if (err) throw err;
           // if there are no errors send an OK message.
        
       });
     res.send("save");
});

app.put("/student",(req,res)=>{
    res.send("this is put method ")
});

app.listen(2000,()=>
{
    console.log("connected")
});