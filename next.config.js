/* eslint-disable */

const withOffline = require("next-offline");

module.exports = withOffline({});
//module.exports = withBundleAnalyzer(withOffline({}));

/*module.exports = withCss(
  withLess({
    dir: ".",
    distDir: "./build",
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[folder]_[local]___[hash:base64:5]"
    },
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    webpack(config, options) {
      if (options.isServer) {
        config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            tsconfig: "./tsconfig.json"
          })
        );

        const antStyles = /antd\/.*?\/style.*?/;
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
