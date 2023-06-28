module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest/presets/js-with-ts',
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  roots: ['<rootDir>/src'],
  transformIgnorePatterns: [
    '/node_modules/(?!(foo|bar)/)',
  ],
  extensionsToTreatAsEsm: ['.js'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleNameMapper: {
    '^axios$': '<rootDir>/__mocks__/axios.js',
  },
};
