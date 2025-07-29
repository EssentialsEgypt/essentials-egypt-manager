const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/competitors', require('./routes/competitors'));
app.use('/api/content', require('./routes/content'));
app.use('/api/cashlog', require('./routes/cashlog'));
app.use('/api/ads', require('./routes/ads'));
app.use('/api/audience', require('./routes/audience'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/ad-ideas', require('./routes/adIdeas'));
app.use('/api/auto-messages', require('./routes/autoMessages'));

app.get('/', (req, res) => res.send('Essentials Egypt Manager API is running'));

module.exports = app;