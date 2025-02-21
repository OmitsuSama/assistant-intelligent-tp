const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log("Clé API OpenAI :", OPENAI_API_KEY);

async function generateResponse(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API OpenAI :", error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { generateResponse };
