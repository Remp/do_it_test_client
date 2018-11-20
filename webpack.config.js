const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  resolve: {
    modules: [
      path.join(process.cwd(), 'node_modules'),
      path.join(process.cwd(), 'src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    compress: true,
    watchContentBase: true,
    hot: true,
    // quiet: true,
    overlay: false
  }
}
