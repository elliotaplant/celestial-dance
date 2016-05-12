var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
 template: __dirname + '/src/index.html',
 filename: 'index.html',
 inject: 'body'
});
var path = require('path');

module.exports = {
 entry: [
   './src/js/app.js'
 ],
 output: {
   filename: 'index_bundle.js',
   path: __dirname + '/build'
 },
 cache: true,
 debug: true,
 devtool: 'source-map',
 module: {
   loaders: [
     {
       test: /\.js$/, include: __dirname + '/src', loader: 'babel-loader'
     }
   ]
 },
 plugins: [HTMLWebpackPluginConfig]
}
