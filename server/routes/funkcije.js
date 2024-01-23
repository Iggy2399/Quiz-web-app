var pool = require('../Connection.js');


var funkcije = {
    
mysql_query:function(upit, callback){
    function funkcija1(a, callback){
        pool.getConnection(function(err, connection){
            if(err) {
                callback(500, err);
            }else{
                connection.query(a,function(err, rows) {
                    connection.release();
                    if(err){
                        callback(501, err);
                    }else{
                        callback(true, rows);
                    }                          
                });
            }
        });
    }

    try{
        if(typeof(upit)==='string'){
            funkcija1(upit, function(rezultat, podaci){
                if(rezultat == true){
                    callback({ success: true, message: 'Uspješno', status: rezultat, data:podaci });
                }else{
                    callback({ success: false, message: 'Greška konekcije ili baze', status: rezultat, data:podaci });
                }
            });
        }else{
            callback({ success: false, message: 'Upit nije poslan u dobrom obliku!', status: 502, data:[] });
        }
    }catch(err){
        console.log(err);
        callback({ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err });
    }
},


  
}


module.exports = funkcije;