const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const funkcije = require('./funkcije');

var korisnik = {
    korisnikLogin : function(req,res,next){
       
        console.log("Logiranje...")
        if(req.body.email && req.body.lozinka ){
        let query = 'SELECT * FROM korisnici WHERE email = ? AND lozinka = ?';
        let table = [req.body.email, req.body.lozinka];

        query = mysql.format(query,table);
        funkcije.mysql_query(query, function(podaci){
            
            if(podaci.data.length === 0){
                
                return 0;
                
            }else{
            
            res.send(podaci)
            console.log("Query successfully executed");
        
            }
       })
       
    }}
   
}
module.exports = korisnik;

















