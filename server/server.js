import { korisnici } from './korisnici';
import { jwt } from 'jsonwebtoken';

const express = require('express'); 
const { korisnici } = require('./korisnici');
const app = express(); 
app.use(express.json())
// handling CORS 
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin",  
               "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers",  
               "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
}); 
  

app.get('/',(req,res)=>{
    res.send('Porukica')
})
// route for handling requests from the Angular client 
app.get('/api/message', (req, res) => { 
    res.json({ message:  
            'Poruka sa servera' }); 
}); 
  

app.post("api/users/login",(req,res)=>{
    const body = req.body;
    const{email, lozinka} = req.body
    const user = korisnici.find(user => user.email === email 
        && user.lozinka === lozinka);

        if(user){
            res.send(generateTokenResponse(user))
        }else{
            res.status(400).send("email ili lozinka nisu ispravni")
        }

})
const generateTokenResponse = (user) => {
    const token = jwt.sign({
        email:user.email, admin:user.admin,
        
    },"Text", {expiresIn:"30d"});
    user.token = token;
    return user;
}
app.listen(3000, () => { 
    console.log('Server listening on port 3000'); 
});

