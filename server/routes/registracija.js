const mysql = require('mysql');
const funkcije = require('./funkcije');
var korisnikReg={
    korisnikRegister : function(req,res,next){
        console.log("Početak registracije");

        let query1 = `SELECT * FROM korisnici WHERE email = '${req.body.email}' AND lozinka = '${req.body.lozinka}' `;
        console.log(query1);
        funkcije.mysql_query(query1, function(podaci){
            console.log(podaci.data[0]);
            if(podaci.data.length !== 0){
                return 0;
            }else{
                let query = "INSERT INTO korisnici (ime_prezime, email, lozinka, uloga) VALUES (?,?,?,?)";
                let uloga = "igrac";
                let table = [req.body.ime_prezime, req.body.email, req.body.lozinka,uloga];
                query = mysql.format(query,table);
                funkcije.mysql_query(query, function(podaci){
        
                    console.log(podaci);
                res.json({message: "Registracija uspješna", data:podaci.data})
                console.log("Query successfully executed");
            })

            }
        })
       
}
}
module.exports = korisnikReg;
    
        
    
