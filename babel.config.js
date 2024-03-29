module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": { "version": 3, "proposals": true }
      }
    ],
  ],
};
