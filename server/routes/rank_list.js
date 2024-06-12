const mysql = require('mysql');
const funkcije = require('./funkcije');

var rankListUpdate = {
    rankLista: function(req,res,next){
        const { userId, points} = req.body;

        if (!userId || points == null) {
            return res.status(400).send({ error: 'User ID and points are required' });
          }
          
        let query = 'UPDATE korisnici SET bodovi = ? WHERE id = ?';
        let table = [userId,points];
        query = mysql.format(query, table);
        
        funkcije.mysql_query(query,  function(podaci,error){
            console.log(podaci.data.length);
            if(error){
                console.error("Neuspješan update podataka!",error);
                return res.status(500).send({error:'Database update failed!'});
            }else{
                res.send({
                    success: true,
                    message: 'Bodovi ažurirani!'
                })
                
            }
       })
    }
    }
module.exports = rankListUpdate;