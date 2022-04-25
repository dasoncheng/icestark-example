module.exports = {
  // 提供 dev 下 cors 访问
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    // 设置 library name，该值需要与第二步的 setLibraryName 的入参保持一致
    library: `module-angular-follow-up`,
    // 将应用打包 umd 规范
    libraryTarget: "umd",
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
  },
};
