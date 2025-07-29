const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    cards: [
      { title: 'Total Profit', value: 12345 },
      { title: 'Active Campaigns', value: 7 },
    ],
    charts: [
      { name: 'Profits', data: [1000, 2000, 3000, 4000] },
    ],
  });
});

module.exports = router;