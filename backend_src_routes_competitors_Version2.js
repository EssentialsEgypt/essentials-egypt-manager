const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Competitor A', viralReels: 3, ideas: ['Idea 1', 'Idea 2'] },
    { id: 2, name: 'Competitor B', viralReels: 2, ideas: ['Idea 3'] },
  ]);
});

module.exports = router;