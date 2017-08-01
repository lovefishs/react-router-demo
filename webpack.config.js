const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, './src/main.jsx'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
    chunkFilename: 'chunk.[name].js',
    publicPath: '',
  },
  resolve: {
    mainFields: ['browser', 'jsnext:main', 'module', 'main'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }], 'react'],
              // 装饰器插件的位置顺序非常重要，see: https://github.com/mobxjs/mobx/issues/105
              plugins: ['transform-decorators-legacy', 'transform-decorators', 'syntax-dynamic-import', 'transform-class-properties', 'transform-runtime'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: 'body', // true | 'head' | 'body' | false
      // chunks: [],
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: false, // true 会启用 inline mode，一段处理实时重载的脚本被插入到 bundle 中(页面会自动刷新)
    hot: false, // 推荐与 inline: true 一起配置
    contentBase: resolve(__dirname, './dist'),
    publicPath: '',
    compress: true,
    noInfo: false,
    overlay: true,
    clientLogLevel: 'none',
    stats: 'minimal',
    headers: {},
  },
}
