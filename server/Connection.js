require('dotenv').config();
const mysql = require('mysql2');

 function Connection(){
     this.pool = null;
     this.init = function(){
         this.pool = mysql.createPool({
            
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
        
        
     }
     this.getConnection = function(callback) {
        this.pool.getConnection(function(err, connection) {
          callback(err, connection);
        });
      };
    };
     
 
//Database connection
/*
this.pool.getConnection((err,con)=>{
    if(err){
        console.log(`Could not connect to database ${err}`)
    }else{
        console.log("Connected to database")
    }
})

const $query = "SELECT * FROM korisnici";
this.pool.query($query, function(err,rows,fields){
    if(err){
        console.log("error");
        return;
    }
    console.log("Query successfully executed", rows);
})

*/
module.exports = new Connection();