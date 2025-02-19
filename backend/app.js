const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

const { generateResponse } = require('./openai');

app.use(express.json());

app.post('/api/submit', async (req, res) => {
  const { subject } = req.body;
  if (!subject) {
    return res.status(400).json({ error: 'Le sujet est requis.' });
  }

  try {
    const openAIResponse = await generateResponse(subject);
    res.status(200).json({ response: openAIResponse });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la génération de la réponse.' });
  }
});

app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'L’API fonctionne correctement.' });
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
