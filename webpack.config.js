var webpack = require("webpack")

module.exports = {
  "entry": "./index.js",
  "output": {
    "filename": "bundel.pack.js",
    "sourceMapFilename": 'bundle.map'
  },
  "devtool": '#source-map',
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "loader": "babel-loader",
        "query": {
          "presets": ['env', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warnings: false,
      mangle: true
    })
  ]
};