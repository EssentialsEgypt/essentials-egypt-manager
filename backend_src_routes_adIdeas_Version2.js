const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    ideas: [
      { concept: 'Flash Sale', targeting: 'Ages 18-24, Cairo' },
      { concept: 'Holiday Discount', targeting: 'Egypt, 25-40' },
    ],
  });
});

module.exports = router;