//jest.config.cjs
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    setupFiles: ['./jest.bootstrap.js']
  };
  