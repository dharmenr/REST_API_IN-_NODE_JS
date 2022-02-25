const path =require("path");
const express=require("express")
const app=express();

console.log(path.join(__dirname,"./public"));
  const staticpath=path.join(__dirname,"../public");
  app.use(express.static(staticpath));
  app.get("/",(req,res)=>{
    res.send();
});
app.get("/about",(req,res)=>{
res.send("this is about page ")
})
app.listen(3000,()=>{
    console.log("listning port 3000")
});



/*API 
get----get data 
post ---create data 
put ----update data 
delete---delete data  */