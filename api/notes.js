const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(0);
});

module.exports = router;
