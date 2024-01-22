
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

                console.log(podaci);
            res.json({message: "Login uspješan", data:podaci.data})
            console.log("Query successfully executed");
        })
        

       }
}}
module.exports = korisnik;

















//api for login authentication
/*
app.post("/login",(req,res)=>{
    const{email, lozinka} = req.body;
    if(!email || !lozinka){
        return req.status(400).json({message: "Email and password reuqired!"});
    }
    const sql = 'SELECT * FROM korisnici WHERE email = ?';
    db.query(sql,[email],async (err, result)=>{
        if(err || result.lenght === 0){
            console.log("error in search "+ err);
            res.status(404).json({message: "No email found"})
        }else{
            const match = await bcrypt.compare(lozinka, result[0].password);
            if(match){
                const token = jwt.sign({userId: result[0].id}, 'my_secret_key',{
                    expiresIn: '2h'
                });
                res.json({message:'Login Successful', token})
            }else{
                res.status(401).json({message: 'Invalid password'})
            }
        }

        })
});
*/