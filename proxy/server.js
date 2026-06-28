const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security: API key stored server-side only
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '2AEKNWFKWZJ3UNJYNFBHF5C21RKA9ZEWT7';
const AOC_CONTRACT = '0x4A662A2f4614BE5d9eB82592207be12F159b1101';

// Enable CORS for your frontend domain
app.use(cors({
    origin: ['https://yourusername.github.io', 'https://fantazma-network.onrender.com', 'http://localhost:8080'],
    methods: ['GET']
}));

// Cache for 5 minutes to reduce API calls
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCached(key) {
    const item = cache.get(key);
    if (item && Date.now() - item.time < CACHE_DURATION) {
        return item.data;
    }
    return null;
}

function setCache(key, data) {
    cache.set(key, { data, time: Date.now() });
}

// ============================================
// PROXY ENDPOINTS
// ============================================

// 1. AOC Token Supply
app.get('/api/aoc/supply', async (req, res) => {
    const cached = getCached('supply');
    if (cached) return res.json(cached);

    try {
        const response = await fetch(
            `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${AOC_CONTRACT}&apikey=${ETHERSCAN_API_KEY}`
        );
        const data = await response.json();
        setCache('supply', data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch supply' });
    }
});

// 2. AOC Token Info (holders, name, etc.)
app.get('/api/aoc/info', async (req, res) => {
    const cached = getCached('info');
    if (cached) return res.json(cached);

    try {
        const response = await fetch(
            `https://api.etherscan.io/api?module=token&action=tokeninfo&contractaddress=${AOC_CONTRACT}&apikey=${ETHERSCAN_API_KEY}`
        );
        const data = await response.json();
        setCache('info', data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch token info' });
    }
});

// 3. AOC Transactions
app.get('/api/aoc/transactions', async (req, res) => {
    const cached = getCached('txs');
    if (cached) return res.json(cached);

    try {
        const response = await fetch(
            `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${AOC_CONTRACT}&page=1&offset=100&sort=desc&apikey=${ETHERSCAN_API_KEY}`
        );
        const data = await response.json();
        setCache('txs', data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// 4. Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
    console.log(`✅ Fantazma Proxy Server running on port ${PORT}`);
    console.log(`🔗 AOC Contract: ${AOC_CONTRACT}`);
    console.log(`🛡️  API Key hidden from client`);
});

module.exports = app;