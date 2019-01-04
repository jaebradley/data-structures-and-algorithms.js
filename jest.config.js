const configuration = {
  collectCoverageFrom: [
    'src/**/*.{js}',
  ],
  globals: {},
  moduleFileExtensions: [
    'js',
  ],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js',
    '<rootDir>/src/**/?(*.)(spec|test).js',
  ],
};

module.exports = configuration;
