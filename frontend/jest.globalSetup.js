// jest.globalSetup.js
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
console.log('GlobalSetup: Polyfills for TextEncoder/TextDecoder chargés');
