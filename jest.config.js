module.exports = {
  preset: 'vite-jest',
  setupFilesAfterEnv: ['<rootDir>/app/javascript/jest.setup.js'],
  testMatch: [
    '<rootDir>/app/javascript/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/app/javascript/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'html', 'json'],
  coverageDirectory: 'coverage/jest',
  passWithNoTests: true,
};
