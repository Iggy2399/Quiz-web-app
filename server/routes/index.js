const express = require('express'); 
const prijava = require('./prijava.js');
const registracija = require('./registracija.js');
const router = express.Router();
const prikazKorisnika = require("./prikaz_korisnika.js");
const uredi = require("./uredivanjeKorisnika.js");
const uredivanjeKorisnika = require('./uredivanjeKorisnika.js');

router.post('/api/login', prijava.korisnikLogin);
router.post('/api/register',registracija.korisnikRegister);
router.get('/api/prikaz_korisnika',prikazKorisnika.korisnikPrikaz);
router.post('/api/edit_user', uredivanjeKorisnika.korisnikUredi);

module.exports = router;