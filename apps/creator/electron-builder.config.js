const path = require("node:path");

module.exports = {
  appId: "com.koi.app",
  productName: "KoiEditor",
  directories: {
    app: "runtime",
    output: "dist",
  },
  publish: null,
  files: [
    "**/*",
    {
      from: path.resolve(__dirname, "../creator-main/dist"),
      to: ".",
    },
    {
      from: path.resolve(__dirname, "../creator-preload/dist"),
      to: "creator-preload",
    },
    {
      from: path.resolve(__dirname, "../creator-web/dist"),
      to: "creator-web",
    },
    "../package.json",
  ],
  extraResources: [],
  win: {
    signAndEditExecutable: false,
    target: [
      {
        target: "dir",
        arch: ["x64"],
      },
    ],
  },
};
