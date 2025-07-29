const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    templates: [
      { trigger: 'hello', reply: 'Hi there! How can I help you today?' },
      { trigger: 'order', reply: 'You can order directly from our website.' },
    ],
  });
});

module.exports = router;