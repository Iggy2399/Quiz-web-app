const funkcije = require('./funkcije');

var pitanje = {
    dohvatiPitanje : function(req, res, next){
        console.log("Dohvaćanje pitanja");
        let query = "SELECT * FROM  pitanja";
        
        funkcije.mysql_query(query, function(podaci){
           
            console.log(podaci);
            res.send(podaci)
            console.log("Query successfully executed");
        })
    }
}
module.exports = pitanje;