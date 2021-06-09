module.exports = {
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        "X-Frame-Options": "*",
      };
      return config;
    };
  },
};
