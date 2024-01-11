import  {korisnici}  from './korisnici';
import  jwt  from 'jsonwebtoken';
import  express  from 'express';
import cors from "cors"

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
  

app.post("/api/users/login",(req,res)=>{
    const{email, lozinka} = req.body
    const user = korisnici.find(user => user.email === email 
        && user.lozinka === lozinka);

        if(user){
            res.send(generateTokenResponse(user))
        }else{
            res.status(400).send("Prijava neuspješna Email ili lozinka nisu ispravni!")
        }

})
 const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, admin:user.admin,
        
    },"Text", {expiresIn:"30d"});
    user.token = token;
    return user;
}

app.listen(3000, () => { 
    console.log('Server listening on port 3000'); 
});

