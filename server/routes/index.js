const express = require('express'); 
const prijava = require('./prijava.js');
const registracija = require('./registracija.js');
const router = express.Router();

router.post('/api/login', prijava.korisnikLogin);
router.post('/api/register',registracija.korisnikRegister)

module.exports = router;