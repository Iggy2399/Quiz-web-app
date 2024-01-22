const express = require('express'); 
const cors = require('cors');
const connection = require('./Connection');
const bodyParser = require('body-parser');
const app = express();


const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: ["http://localhost:4200"]
}));


var apiRoutes = express.Router();
app.use('/api', apiRoutes);

 app.get('/', function(req, res){
     res.json({ message: 'Poruka'});
 });
 
 app.use('/', require('./routes'));
 
connection.init();

//api for register
/*
app.post('/register',(req,res)=>{
    
   
*/

/*
 app.post('/login',(req,res)=>{
    if(req.body.email && req.body.lozinka ){
        let sql = 'SELECT * FROM korisnici WHERE email = ? AND lozinka = ?';
        let table = [req.body.email, req.body.lozinka];
        sql = mysql.format(sql, table);
        funkcije.mysql_query(sql, (podaci) =>{
            console.log("PODACI", podaci)
            if(err){
                console.log("error");
                return;
            }
            console.log("Query successfully executed");
            res.json("Login successfull!")
        })
        

 } else {
    res.json({message: "error"})
 }})
*/
 
app.listen(port);
    console.log(`Server listening on port: ${port}`); 

