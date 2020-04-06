const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'microfrontend-react-app1',
        libraryTarget: 'var'
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}