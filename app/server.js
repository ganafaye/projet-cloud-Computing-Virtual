const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Architecture 3-Tiers</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 30px;
          display: inline-block;
        }
        h1 { font-size: 2.5em; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🌐 Architecture 3-Tiers</h1>
        <p>VM-WEB (Node.js) - Zone DMZ</p>
        <p>✅ Application déployée avec succès!</p>
        <hr>
        <small>Projet Cloud Computing - Master SI</small>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Serveur Node.js démarré sur le port ${PORT}`);
});
