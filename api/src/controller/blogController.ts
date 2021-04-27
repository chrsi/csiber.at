import { getAllIds, render } from "../service/notionGateway";

var express = require('express');

var router = new express.Router();

router.get('', async function (req: any, res: any, next: any) {
  const response = await getAllIds().catch(next);
  res.json(response);
})

router.get('/:id', async function (req: any, res: any, next: any) {
  const response = await render(req.params.id).catch(next);
  res.setHeader('content-type', 'text/markdown');
  res.send(response);
})

module.exports = router;