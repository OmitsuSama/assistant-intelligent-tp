module.exports = {
    globalSetup: "<rootDir>/jest.globalSetup.js",
    testEnvironment: "jest-environment-jsdom", // Assurez-vous d'utiliser jsdom pour les tests React
    setupFiles: [], // Vous pouvez laisser vide si globalSetup suffit
    transform: {
      "^.+\\.[tj]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!msw|@bundled-es-modules)"
    ],
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1"
    },
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    testMatch: [
      "**/?(*.)+(spec|test).[tj]s?(x)",
    ]
  };
  