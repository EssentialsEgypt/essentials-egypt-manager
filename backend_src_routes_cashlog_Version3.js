const express = require('express');
const router = express.Router();

let entries = [
  { id: 1, type: 'income', amount: 1000 },
  { id: 2, type: 'expense', amount: 200 },
];

router.get('/', (req, res) => {
  const totalProfit = entries
    .reduce((acc, entry) => entry.type === 'income' ? acc + entry.amount : acc - entry.amount, 0);
  res.json({ entries, totalProfit });
});

router.post('/', (req, res) => {
  const { type, amount } = req.body;
  const entry = { id: entries.length + 1, type, amount };
  entries.push(entry);
  res.status(201).json(entry);
});

module.exports = router;