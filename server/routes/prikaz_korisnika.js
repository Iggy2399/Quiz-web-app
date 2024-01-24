const mysql = require('mysql');
const funkcije = require('./funkcije');

var prikazKorisnika ={
    korisnikPrikaz : function(req,res,net){
        let query = "SELECT * FROM korisnici";
        
        funkcije.mysql_query(query, function(podaci){
            console.log(podaci.data.length);
            if(podaci.data.length===0){
                res.json({message: "Baza podataka je prazna"})
            }else{
                console.log(podaci);
                res.send(podaci)
        
            }
       })
    }
}
module.exports = prikazKorisnika;