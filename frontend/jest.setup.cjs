// jest.setup.cjs
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
console.log('Polyfills TextEncoder/TextDecoder chargés');
