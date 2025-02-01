const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const funkcije = require('./funkcije');


const JWT_SECRET = 'tajni kljuc';

var korisnik = {
    korisnikLogin: function(req, res, next) {
        console.log("Logiranje...");

        const { email, lozinka } = req.body;

        if (email && lozinka) {
            
            let query = 'SELECT * FROM korisnici WHERE email = ?';
            let table = [email];
            query = mysql.format(query, table);

            funkcije.mysql_query(query, function(podaci) {
                if (podaci.error) {
                    
                    console.error("Query error:", podaci.error);
                    return res.status(500).send({ error: "Database query failed" });
                }

                if (podaci.data.length === 0) {
                    
                    return res.status(401).send({ error: "Invalid email or password" });
                } else {
                    
                    const user = podaci.data[0];

                    if (user.lozinka === lozinka) {
                        
                        const token = jwt.sign(
                            { id: user.id, email: user.email },
                            JWT_SECRET,
                            { expiresIn: '30m' } // Token expires in 1 hour
                        );

                        
                        res.json({
                            token: token,
                            user: {
                                id: user.id,
                                email: user.email,
                                ime_prezime: user.ime_prezime, 
                                uloga: user.uloga
                            }
                        });

                        console.log("Login successful and token generated");
                    } else {
                        
                        res.status(401).send({ error: "Invalid email or password" });
                    }
                }
            });
        } else {
            
            res.status(400).send({ error: "Email and password are required" });
        }
    }
}

module.exports = korisnik;
