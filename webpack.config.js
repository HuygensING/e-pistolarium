const pkg = require('./package.json')

module.exports = {
	entry: "./src/index.tsx",
	output: {
			chunkFilename: `./build/[name].bundel-${pkg.version}.js`,
			filename: `./build/bundle-${pkg.version}.js`,
	},
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
		'react-dom': "ReactDOM",
	},
};

