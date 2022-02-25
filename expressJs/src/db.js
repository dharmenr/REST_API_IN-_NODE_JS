var mysql =require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sms"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    var sql ="select *from StudentData"
    con.query(sql,function(error,result){
        if(error) throw error;
        console.log(result);

       const data= JSON.stringify(result);
       console.log(data);

       const data1= JSON.stringify(data);
       console.log(data1);
       
    });


    console.log("Connected!");
  });
