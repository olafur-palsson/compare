const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'www/js')
  },
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
