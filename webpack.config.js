var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/app.js',
  output: {
    //输出文件地址
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    //输出文件名
    filename: 'bundle.js',
  },
  resolve: {
    // 自动扩展文件后缀名
    extensions: ['', '.js', '.jsx'],
  },
  //调试工具
  devtool: 'source-map',
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
      }
    ]
  },
  // 插件
  plugins: [
    // 运行webpack的时候指定localhost。并且打开浏览器窗口
    new OpenBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' })
  ]
}
