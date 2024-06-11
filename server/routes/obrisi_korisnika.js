const mysql = require('mysql');
const funkcije = require('./funkcije');

var obrisiKorisnika = {
    brisanjeKorisnika : function(req,res,next){
       
        console.log("Početak funkcije")
        if(req.body.id){
        let query = 'DELETE FROM korisnici WHERE id = ?';
        let table = [req.body.id];

        query = mysql.format(query,table);
        funkcije.mysql_query(query, function(podaci){
            console.log(podaci);
        res.send(podaci);
            
       })
       
    }}
}
module.exports = obrisiKorisnika;