const { VUE_APP_SERVER } = process.env

module.exports = {
  devServer: {
    overlay: false,
    proxy: {
      '/serverApi': {
        target: VUE_APP_SERVER,
        changeOrigin: true,
        pathRewrite: {
          '^/serverApi': ''
        }
      }
    }
  }
}
