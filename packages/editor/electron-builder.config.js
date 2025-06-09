const path = require('path');

module.exports = {
  appId: 'com.koi.app',
  productName: 'KoiEditor',
  directories: {
    app: 'packages/editor/runtime',
    output: 'packages/editor/dist',
  },
  publish: null,
  files: [
    '**/*',
    {
      from: path.resolve(__dirname, '../../packages/editor-main/dist'),
      to: '.',
    },
    {
      from: path.resolve(__dirname, '../../packages/editor-preload/dist'),
      to: 'editor-preload',
    },
    {
      from: path.resolve(__dirname, '../../packages/editor-web-ui/out'),
      to: 'editor-web-ui',
    },
  ],
  extraResources: [],
  win: {
    target: [
      {
        target: 'dir',
        arch: ['x64'],
      },
    ],
  },
};
