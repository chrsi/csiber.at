var express = require('express');

var router = new express.Router();

router.get('', async function (req: any, res: any, next: any) {
  res.send('healthy')
})

module.exports = router;
