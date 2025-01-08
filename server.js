const express = require('express');
const path = require('path');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e120f2f56b2c450696d69cdcdb71109d');

const app = express();
const PORT = 5500;

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// API route to fetch news
app.get('/api/news', (req, res) => {
    newsapi.v2
        .topHeadlines({
            q: 'environment',
            category: 'science',
            language: 'en',
            country: 'us',
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ error: 'Failed to fetch news' }));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
