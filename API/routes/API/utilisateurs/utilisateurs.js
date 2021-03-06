var express = require('express');
var router = express.Router();

// Récupération et réinitialisation du mot de passe
router.use('/recuperation', require('./motdepasse'));
router.use('/auth', require('./auth'));

router.get('/', function(req, res, next) {
  res.send('api Utilisateurs');
});

module.exports = router;
