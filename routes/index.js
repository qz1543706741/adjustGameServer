var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/setUserInfo', function(req, res) {
  res.json({"req":req.query})

});

module.exports = router;
