const express = require('express');
const Select = require('../public/javascripts/getUserInfo');
const router = express.Router();

/* GET home page. */
router.get('/setUserInfo', async function (req, res) {
  const sql = 'SELECT * FROM `user_info` '
  const result = await Select(sql);
  res.json({
    "req": req.query,
    "sql_result": result
  })
});


module.exports = router;