const pkg = require('./package.json')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const outputDir = 'build'

const plugins = []
if (process.env.NODE_ENV === 'production') {
	plugins.push(
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
		new UglifyJsPlugin(),
	)
} 

module.exports = {
	entry: "./src/index.tsx",
	output: {
			chunkFilename: `./${outputDir}/[name].bundel-${pkg.version}.js`,
			filename: `./${outputDir}/bundle-${pkg.version}.js`,
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
};

