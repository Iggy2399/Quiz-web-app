const sql = require('mysql');

//Database connection
const db = sql.createPool({
    host:'localhost',
    user: 'root',
    password: null,
    database: 'kviz'
});


db.getConnection((err,con)=>{
    if(err){
        console.log(`Could not connect to database ${err}`)
    }else{
        console.log("Connected to database")
    }
})

const $query = "SELECT * FROM korisnici";
db.query($query, function(err,rows,fields){
    if(err){
        console.log("error");
        return;
    }
    console.log("Query successfully executed", rows);
})

module.exports = db;