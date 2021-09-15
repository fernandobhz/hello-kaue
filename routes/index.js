const express = require('express');
const router = express.Router();
const YAML = require(`yaml`);

const dadosUteis = { title: 'Express' };

router.get('/', function(req, res, next) {
  res.render('index', dadosUteis);
});

router.get('/api', function(req, res, next) {
  res.json(dadosUteis);
});

router.get('/yaml', function(req, res, next) {
  res.contentType('application/x-yaml').status(200).send(YAML.stringify(dadosUteis)).end();
});

module.exports = router;
