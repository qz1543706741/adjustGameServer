const express = require('express');
const Inser = require('../public/javascripts/insertUserInfo');
const router = express.Router();
const {toLineObject} = require('../public/javascripts/utils/util')

/* GET home page. */
router.get('/setUserInfo', async function (req, res) {
  const result = await Inser(toLineObject(req.query));

  res.json({
    "req": req.query,
    "sql_result": 'error'
  })
});


module.exports = router;