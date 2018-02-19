const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const outputDir = './static_local/js'

const plugins = [
	new webpack.optimize.CommonsChunkPlugin({ name: 'commons', filename: `commons-${pkg.version}.js` })
]
if (process.env.NODE_ENV === 'production') {
	plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }))
	plugins.push(new UglifyJsPlugin())
} 

module.exports = {
	entry: {
		document: "./src/components/document2/index.tsx",
		search: "./src/components/search2/index.tsx",
	},
	output: {
		chunkFilename: `[id].chunk-${pkg.version}.js`,
		filename: `[name].bundle-${pkg.version}.js`,
		path: path.resolve(__dirname, outputDir),
		publicPath: '/js/',
	},
	plugins,
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			}
		]
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
}
