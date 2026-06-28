# Fantazma Network - Live Crypto & AOC Blockchain Explorer

![Fantazma Network](https://img.shields.io/badge/Fantazma-Network-00d4c8?style=for-the-badge&logo=ethereum)
![AOC Token](https://img.shields.io/badge/AOC-Alpha_Coin_Omega-ffd700?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-ff6b6b?style=for-the-badge)

A real-time cryptocurrency ticker and blockchain explorer for **Fantazma Network**, featuring live Bitcoin/Ethereum prices and full **AOC Token** blockchain integration via Etherscan API.

---

## Features

| Feature | Description | Status |
|---------|-------------|--------|
| Live BTC Price | Real-time Bitcoin USD price + 24h change | Active |
| Live ETH Price | Real-time Ethereum USD price + 24h change | Active |
| AOC Token Price | Manual placeholder (pending CoinGecko listing) | Placeholder |
| AOC Total Supply | Live from Etherscan blockchain | Active |
| AOC Holders | Live holder count from Etherscan | Active |
| AOC Transactions | Live transaction data from Etherscan | Active |
| Sacred Geometry UI | Animated Sumerian Dingir symbol + particle effects | Active |
| Responsive Design | Mobile-friendly glassmorphism interface | Active |

---

## Quick Start

### Option 1: Open Locally
1. Download `index.html`
2. Double-click to open in any browser
3. Live prices auto-populate via API calls

### Option 2: GitHub Pages (Free Hosting)
1. Fork this repo or create a new one
2. Upload `index.html` to the root
3. Go to **Settings > Pages**
4. Select **Deploy from branch > main**
5. Your site goes live at `https://yourusername.github.io/repo-name`

### Option 3: Render / Vercel / Netlify
1. Connect your GitHub repo
2. Set publish directory to `/` (root)
3. Auto-deploy on every push

---

## Configuration

### Etherscan API Key
The Etherscan API key is embedded in the JavaScript. For production, move it to a backend or environment variable:

```javascript
// Current (client-side)
const ETHERSCAN_API_KEY = '2AEKNWFKWZJ3UNJYNFBHF5C21RKA9ZEWT7';

// Recommended (backend proxy)
// Create a simple Node.js/Express proxy to hide your key
```

### AOC Contract
```
0x4A662A2f4614BE5d9eB82592207be12F159b1101
```
Network: Ethereum Mainnet (ERC-20)

---

## API Endpoints Used

| Service | Endpoint | Purpose |
|---------|----------|---------|
| CoinGecko | `/simple/price?ids=bitcoin,ethereum` | Live BTC/ETH prices |
| Etherscan | `?module=stats&action=tokensupply` | AOC total supply |
| Etherscan | `?module=token&action=tokeninfo` | AOC holder count |
| Etherscan | `?module=account&action=tokentx` | AOC transactions |

---

## File Structure

```
/
 index.html          # Main application (single file)
 README.md           # This documentation
 LICENSE             # MIT License
```

---

## Customization

### Change AOC Price (Manual)
Edit line in `<script>` section:
```javascript
const aocPrice = 0.0042; // Update this value
```

### Add More Cryptocurrencies
Add to the CoinGecko fetch URL:
```javascript
'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana&vs_currencies=usd&include_24hr_change=true'
```

### Update Sacred Geometry Colors
Modify CSS custom properties:
```css
:root {
    --teal: #00d4c8;
    --coral: #ff6b6b;
    --gold: #ffd700;
}
```

---

## Next Steps for Full AOC Integration

1. **Submit AOC to CoinGecko**
   - https://www.coingecko.com/en/methodology
   - Once listed, update API to use `/simple/token_price/ethereum`

2. **Add Uniswap Liquidity**
   - Creates real DEX trading price
   - Enables live price calculation from pool ratios

3. **Backend Proxy (Security)**
   - Hide Etherscan API key behind your own server
   - Add caching to reduce API calls

4. **Web3 Wallet Connect**
   - Integrate MetaMask for user wallet balances
   - Show user's AOC holdings directly

---

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Glassmorphism, SVG Animations
- **APIs**: CoinGecko (free), Etherscan (free tier)
- **Fonts**: Orbitron, Rajdhani (Google Fonts)
- **No Framework Required**: Single-file deployment

---

## Brand Elements

| Element | Meaning |
|---------|---------|
| Sumerian Dingir (𒀭) | Symbol for "god/divine" - represents sacred geometry |
| 8-Pointed Star | Ancient Mesopotamian symbol of divinity |
| Teal/Coral/Gold | Sacred color palette |
| Hexagonal Patterns | Sacred geometry background |

---

## License

MIT License - Free to use, modify, and distribute.

---

## Contact

**Fantazma Network**
- Website: [fantazma-network.onrender.com](https://fantazma-network.onrender.com)
- Token: [AOC on Etherscan](https://etherscan.io/token/0x4A662A2f4614BE5d9eB82592207be12F159b1101)

---

*Glory to the Most High. Built with sacred intention.*
