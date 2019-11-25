module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = [];

  return {
    presets,
    plugins,
    env: {
      production: {
        comments: false,
        presets: ["minify"],
        ignore: ["**/*.test.js"]
      },      
    }
  };
};
