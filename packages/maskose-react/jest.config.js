module.exports = {
  displayName: 'maskose-react',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each'
  ]
};