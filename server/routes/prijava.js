const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const funkcije = require('./funkcije');

var korisnik = {
    korisnikLogin : function(req,res,next){
       
        console.log("Početak funkcije")
       if(req.body.email && req.body.lozinka ){
        let query = 'SELECT * FROM korisnici WHERE email = ? AND lozinka = ?';
        let table = [req.body.email, req.body.lozinka];

        query = mysql.format(query,table);
        funkcije.mysql_query(query, function(podaci){
            console.log(podaci.data.length);
            if(podaci.data.length===0){
                res.json({message: "Login neuspješan"})
            }else{
                console.log(podaci);
            res.json({message: "Login uspješan", data:podaci.data})
            console.log("Query successfully executed");
        
            }
       })
       
    }}
   
}
module.exports = korisnik;

















