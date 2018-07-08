const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'scss' ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
};