var mysql =require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sms"
  });
  
  con.connect(function(err) {
    if (err) throw err;
   // var sql =  "create TABLE student (name VARCHAR(255),email VARCHAR(30) ,phone VARCHAR(255))";
   // con.query(sql,function(error,result){
     //   if(error) throw error;
       
    //});


    console.log("Connected!");
  });
module.exports=con;