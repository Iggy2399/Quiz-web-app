const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const funkcije = require('./funkcije');


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

var korisnik = {
    korisnikLogin: function(req, res, next) {
        console.log("Logiranje...");

        const { email, lozinka } = req.body;

        if (email && lozinka) {
            // Query to find the user by email
            let query = 'SELECT * FROM korisnici WHERE email = ?';
            let table = [email];
            query = mysql.format(query, table);

            funkcije.mysql_query(query, function(podaci) {
                if (podaci.error) {
                    // Handle error from the query
                    console.error("Query error:", podaci.error);
                    return res.status(500).send({ error: "Database query failed" });
                }

                if (podaci.data.length === 0) {
                    // No user found
                    return res.status(401).send({ error: "Invalid email or password" });
                } else {
                    // User found, verify password
                    const user = podaci.data[0];

                    if (user.lozinka === lozinka) {
                        // Password matches, create JWT
                        const token = jwt.sign(
                            { id: user.id, email: user.email },
                            JWT_SECRET,
                            { expiresIn: '1h' } // Token expires in 1 hour
                        );

                        // Send the token and user info (excluding sensitive data)
                        res.json({
                            token: token,
                            user: {
                                id: user.id,
                                email: user.email,
                                ime_prezime: user.ime_prezime, // Include other non-sensitive fields if necessary
                                uloga: user.uloga
                            }
                        });

                        console.log("Login successful and token generated");
                    } else {
                        // Password does not match
                        res.status(401).send({ error: "Invalid email or password" });
                    }
                }
            });
        } else {
            // Missing email or password
            res.status(400).send({ error: "Email and password are required" });
        }
    }
}

module.exports = korisnik;
