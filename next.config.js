/* eslint-disable */

const withCss = require("@zeit/next-css");
const path = require("path");

module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    return config;
  }
});
/*
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true
});
module.exports = withBundleAnalyzer(
  withCss({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader"
        });
      }
      return config;
    }
  })
);
*/
