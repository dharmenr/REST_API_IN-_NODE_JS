const mysql=require("mysql");
const database=require("./db/conn");
const path =require("path")
let tablename='student1';

//create table student
var sqlquery =  `CREATE TABLE ${tablename} (
    name VARCHAR(255), address VARCHAR(255))`;

    module.exports=tablename;