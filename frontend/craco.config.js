const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve('path-browserify'),
        fs: false,
        process: require.resolve('process/browser'),
      };
      return webpackConfig;
    },
  },
};
