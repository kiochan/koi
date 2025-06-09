const path = require('path');

module.exports = {
  appId: 'com.koi.app',
  productName: 'KoiEditor',
  directories: {
    app: 'packages/editor/runtime',
    output: 'packages/editor/dist',
  },
  files: [
    '**/*',
    {
      from: path.resolve(__dirname, '../../packages/electron-main/dist'),
      to: '.',
    },
    {
      from: path.resolve(__dirname, '../../packages/web-ui/out'),
      to: 'web-ui',
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
