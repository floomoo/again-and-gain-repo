module.exports = {
    presets: [
      [
          "@babel/preset-env",
          {
              targets: {
                  // compile for the current node version
                  node: "current",
              },
          },
      ],
    ],
  };
  