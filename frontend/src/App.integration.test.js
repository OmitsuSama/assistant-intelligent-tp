// Au tout début de votre fichier de test
if (typeof global.TransformStream === 'undefined') {
  // Utilise le module natif "stream/web" pour obtenir TransformStream
  global.TransformStream = require('stream/web').TransformStream;
}

// Polyfill pour TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const React = require('react');
const { render, screen, fireEvent, waitFor } = require('@testing-library/react');
const App = require('./App').default;
const { rest } = require('msw/node');
const { setupServer } = require('msw/node');

const server = setupServer(
  rest.post('http://localhost:5000/api/submit', (req, res, ctx) => {
    const { subject } = req.body;
    return res(ctx.json({ response: `Réponse générée pour : ${subject}` }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('cycle complet : saisie → traitement → affichage', async () => {
  render(React.createElement(App));
  
  const input = screen.getByLabelText(/Entrez votre sujet ou question/i);
  const button = screen.getByRole('button', { name: /Envoyer/i });
  
  fireEvent.change(input, { target: { value: 'Test de cycle complet' } });
  fireEvent.click(button);
  
  const responseText = await waitFor(() =>
    screen.getByText(/Réponse générée pour : Test de cycle complet/i)
  );
  expect(responseText).toBeInTheDocument();
});
