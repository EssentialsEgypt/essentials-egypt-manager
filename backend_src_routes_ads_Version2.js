const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    ads: [
      { platform: 'Meta', status: 'active', spend: 500 },
      { platform: 'Google', status: 'paused', spend: 250 },
    ],
    suggestions: ['Scale Meta', 'Pause Google'],
  });
});

module.exports = router;