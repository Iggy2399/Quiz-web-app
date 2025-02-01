const express = require('express'); 
const prijava = require('./prijava.js');
const registracija = require('./registracija.js');
const router = express.Router();
const prikazKorisnika = require("./prikaz_korisnika.js");
const uredivanjeKorisnika = require('./uredivanjeKorisnika.js');
const pitanje = require('./pitanja.js');
const rankList = require('./rank_list.js');
const obrisi = require('./brisanje.js');




router.post('/api/login', prijava.korisnikLogin);
router.post('/api/register',registracija.korisnikRegister);
router.get('/api/prikaz_korisnika',prikazKorisnika.korisnikPrikaz);
router.patch('/api/edit_user', uredivanjeKorisnika.korisnikUredi);
router.get('/api/pitanja',pitanje.dohvatiPitanje);
router.patch('/api/azuriraj_bodove', rankList.rankLista);
router.post('/api/obrisi_korisnika/',obrisi.brisanje);

module.exports = router;