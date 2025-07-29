const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    traffic: [100, 200, 300, 400],
    trends: ['Up', 'Down'],
    metrics: { bounceRate: '30%' },
  });
});

module.exports = router;