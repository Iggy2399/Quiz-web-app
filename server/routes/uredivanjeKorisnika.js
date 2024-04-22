const mysql = require('mysql');
const funkcije = require('./funkcije');

var uredivanjeKorisnika = {
    korisnikUredi : function(req,res,next){
       
        console.log("Početak funkcije")
        if(req.body.email && req.body.ime_prezime && req.body.id){
        let query = 'UPDATE korisnici set email = ? , ime_prezime = ? WHERE id = ?';
        let table = [req.body.email, req.body.ime_prezime, req.body.id];

        query = mysql.format(query,table);
        funkcije.mysql_query(query, function(podaci){
            console.log(podaci);
        res.send(podaci);
            
       })
       
    }}
}
module.exports = uredivanjeKorisnika;