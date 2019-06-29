const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/, // matches all *.js files
                exclude: /node_modules/ //do this to prevent trying to build everything inside of this
            },
            {
                test: /\.s?css$/, // matches all *.css & *.scss files
                use: [ // allows us to use multiple loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};