module.exports = {
  displayName: '@koi/editor-web-ui',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/editor-web-ui',
};
