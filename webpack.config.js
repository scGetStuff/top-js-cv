const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'eval-source-map',
    performance: {
        hints: false,
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Template',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html'),
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
};
