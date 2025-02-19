const axios = require('axios');
const { generateResponse } = require('./openai');

jest.mock('axios');

describe('generateResponse', () => {
  it('doit retourner une réponse générée par OpenAI', async () => {
    const dummyText = "Texte généré";
    axios.post.mockResolvedValue({
      data: {
        choices: [
          { text: dummyText }
        ]
      }
    });
    
    const prompt = "Test de prompt";
    const response = await generateResponse(prompt);
    expect(response).toBe(dummyText);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.openai.com/v1/completions',
      {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': expect.stringContaining('Bearer ')
        }
      }
    );
  });
  
  it('doit lancer une erreur si l’appel à l’API échoue', async () => {
    axios.post.mockRejectedValue(new Error('API error'));
    await expect(generateResponse("Test de prompt")).rejects.toThrow('API error');
  });
});
