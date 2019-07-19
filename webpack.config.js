// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const path = require('path')
const webpack = require('webpack')

//设置一个变量
const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bound.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'static-[name].[ext]'
          }
        }]
      },
      {
        //匹配规则
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        //转换路径
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"deelopment"' : '"production"'
      }
    })
  ]
}
if (isDev) {
  //将未打包的代码映射到浏览器中
  config.devtool = '#cheap-module-eval-source-map'
  //webpack-dev-server: webpack2.0以后都是可以通过 devServer 配置 webpack-dev-server
  config.devServer = {
    port: 8000, //端口配置
    host: '0.0.0.0',
    //配置ip地址，0.0.0.0好处：可通过127.0.0.1访问也可以通过localhost:端口号访问
    //还可以通过本机ip地址访问
    overlay: {
      errors: true, //打包出现错误，将错误信息显示到网页上
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}
module.exports = config