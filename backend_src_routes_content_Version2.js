const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    calendar: [],
    scheduledPosts: [],
    engagementStats: {},
  });
});

module.exports = router;