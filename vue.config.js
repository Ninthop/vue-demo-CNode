const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_s', resolve('src/assets/style'))
      .set('_com', resolve('src/common'))
    },
  // 打包时不生成.map文件
  productionSourceMap: false,

  devServer: {
    open: true
  }
}