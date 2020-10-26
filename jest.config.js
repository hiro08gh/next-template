module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json'
    }
  }
};
