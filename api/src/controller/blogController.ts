var express = require('express');
const notionGateway = require('../service/notionGateway.ts');
var router = new express.Router();

router.get('', async function (req: any, res: any, next: any) {
  const response = await notionGateway.getAllIds().catch(next);
  res.json(response);
})

router.get('/:id', async function (req: any, res: any, next: any) {
  const response = await notionGateway.render(req.params.id).catch(next);
  res.setHeader('content-type', 'text/markdown');
  res.send(response);
})

module.exports = router;