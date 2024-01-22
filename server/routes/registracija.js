const mysql = require('mysql');
const funkcije = require('./funkcije');
var korisnikReg={
    korisnikRegister : function(req,res,next){
        console.log("Početak registracije")
        let query = "INSERT INTO korisnici (ime_prezime, email, lozinka, uloga) VALUES (?,?,?,?)";
        let table = [req.body.ime_prezime, req.body.email, req.body.lozinka, req.body.uloga];
        query = mysql.format(query,table);
        funkcije.mysql_query(query, function(podaci){

        console.log(podaci);
        res.json({message: "Registracija uspješna", data:podaci.data})
        console.log("Query successfully executed");
    })
}
}
module.exports = korisnikReg;
    
        
    
