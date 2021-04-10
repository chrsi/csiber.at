var express = require('express');
const notionGateway = require('../service/notionGateway');
var router = new express.Router();

router.get('', async function (req, res) {
  const response = await notionGateway.getAllIds();
  res.json(response);
})

module.exports = router;