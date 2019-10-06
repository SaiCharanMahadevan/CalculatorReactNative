module.exports = {
  preset: 'react-native',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupFiles: [
    './jest.setup.js',
  ],
  testRegex: '.test.js$',
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
  coverageReporters: [
    'json-summary',
    'text',
    'lcov',
  ],
};
