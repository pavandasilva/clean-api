module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.*\\.ts$': 'ts-jest'
  },
  coveragePathIgnorePatterns: ['node_modules', 'test-config', 'interfaces'],
  preset: '@shelf/jest-mongodb'
}
