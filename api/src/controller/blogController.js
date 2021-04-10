var express = require('express');
const notionGateway = require('../service/notionGateway');
var router = new express.Router();

router.get('', async function (req, res, next) {
  const response = await notionGateway.getAllIds().catch(next);
  res.json(response);
})

router.get('/:id/html', async function (req, res, next) {
  const response = await notionGateway.render(req.params.id).catch(next);
  res.send(response);
})

module.exports = router;