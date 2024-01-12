const jwt = require('jsonwebtoken');
const express = require('express'); 
const cors = require('cors');
const db = require('./db.js');
const bcrypt = require('bcrypt')

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: ["http://localhost:4200"]
}));
app.get('/',(req,res)=>{
    res.send('Server')
})
// route for handling requests from the Angular client 
app.get('/api/message', (req, res) => { 
    res.json({ message:  
            'Poruka sa servera' }); 
}); 

//api for register
app.post('/register',(req,res)=>{
    const{email,lozinka}= req.body;

    const hashedPassword = bcrypt.hash(lozinka,10);
    console.log(hashedPassword);

    const sql = 'INSERT INTO korisnici (email, lozinka) VALUES (?,?)';
    db.query(sql,[email , hashedPassword],(err,result)=>{
        if(err){
            console.log("Error in registration: "+ err)
        }else{
            res.json({message: "Registration Successful"});
        }//
    })
});

//api for login authentication
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




app.listen(port, () => { 
    console.log('Server listening on port 3000'); 
});

