const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
	devtool: process.env.NODE_ENV ? false : 'source-map',
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ],
	optimization: {
		removeAvailableModules: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		splitChunks: {
			chunks: 'async',
			minSize: 5000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 3,
			maxInitialRequests: 3,
			automaticNameDelimiter: '.',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name: 'shared',
					reuseExistingChunk: true,
					enforce: true,
					chunks: 'all',
				},
				default: {
					chunks: 'async',
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'vendor-react',
					reuseExistingChunk: true,
					chunks: 'all',
				},
			},
		},
	},
};