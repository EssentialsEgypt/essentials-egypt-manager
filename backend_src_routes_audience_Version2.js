const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    demographics: { age: '18-34', location: 'Egypt' },
    responseRates: { Instagram: 0.8, Facebook: 0.7 },
  });
});

module.exports = router;