{
  "name": "vue-todo-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    //"build": "NODE_ENV=production webpack --config webpack.config.js"  配置Mac环境
    //"build": "set NODE_ENV=production webpack --config webpack.config.js"  配置windows环境
    //建议安装  cross-env 插件,这样避免为兼容平台而写两行相同的代码
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "dev": "webpack-dev-server --config webpack.config.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10"
  },
  "dependencies": {
    "css-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^0.23.1",
    "vue": "^2.6.10",
    "webpack": "^4.36.1",
    "webpack-cli": "^3.3.6"
  }
}