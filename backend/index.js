// backend
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Behövs för att lösa __dirname i ES-moduler

const app = express();
const port = 4001;

// Hämta __dirname i ES-moduler
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logga alla förfrågningar till servern
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// Proxy Willys API
app.get('/api/*', async (req, res) => {
  try {
    const willysResponse = await fetch(`https://www.willys.se${req.url.slice(4)}`);
    const data = await willysResponse.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching from Willys:', error);
    res.status(500).send('Error fetching data from Willys');
  }
});

// Exempel på API-kategorier och produkter
// Category tree: /api/leftMenu/categorytree 
// Category list: /api/c/kott-chark-och-fagel/palagg?size=30&page=0&sort=
// [topRated, name-asc, name-desc, price-asc, price-desc, compareprice-asc, compareprice-desc]
// Product info: /api/axfood/rest/p/101290312_ST

// Tjäna applikationens byggda filer (dist-folder)
const distFolder = path.join(__dirname, '..', 'dist');
app.use(express.static(distFolder));
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Starta servern
app.listen(port, () => console.log(`Backend listening on port ${port}`));
