/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  moduleFileExtensions: ['ts', 'js', 'jsx', 'tsx', 'json', 'vue', 'css'],
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest'),
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['@babel/preset-typescript']],
        plugins: ['@vue/babel-plugin-jsx']
      }
    ],
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub')
  },
  // onlyFailures: true,
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': '<rootDir>/src/__tests__/mocks/style-mock.js',
    ResizeObserver: '<rootDir>/src/__tests__/mocks/resize-observer.js'
  },
  verbose: true,
  testPathIgnorePatterns: ['/src/__tests__/', 'dynamicForm/common', 'common.ts'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)', '**/__tests__/**/*.[jt]s?(x)'],
  testURL: 'http://localhost/'
};
