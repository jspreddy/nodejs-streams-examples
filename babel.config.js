module.exports = {
  retainLines: true,
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: process.versions.node,
      },
    }],
  ],
  plugins: [],
};
