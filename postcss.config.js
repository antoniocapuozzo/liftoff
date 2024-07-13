module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({ stage: 2 }),
    require("postcss-discard-comments"),
  ],
};
