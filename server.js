const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

let highScores = [];

app.post('/api/score', (req, res) => {
    const { score } = req.body;
    highScores.push({ score, date: new Date() });
    res.json({ success: true });
});

app.get('/api/scores', (req, res) => {
    res.json(highScores.sort((a, b) => b.score - a.score).slice(0, 10));
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));