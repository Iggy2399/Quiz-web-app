const express = require('express'); 
const prijava = require('./prijava.js');
const registracija = require('./registracija.js');
const router = express.Router();
const prikazKorisnika = require("./prikaz_korisnika.js");

router.post('/api/login', prijava.korisnikLogin);
router.post('/api/register',registracija.korisnikRegister);
router.get('/api/prikaz_korisnika',prikazKorisnika.korisnikPrikaz);

module.exports = router;