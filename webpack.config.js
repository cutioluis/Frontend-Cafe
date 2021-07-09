const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { 
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.(png|gif|jpg|svg)$/,
              use: [
                {
                  'loader': 'file-loader',
                  options: {
                    name: 'assets/[hash].[ext]'
                  }
                }
              ]
            }
            
        ]
    },    
    devServer: {
        historyApiFallback: true
    },
<<<<<<< HEAD
    
=======
    devServer: {
        historyApiFallback: true
    },
>>>>>>> feature/router-redux
    plugins: [ 
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
}
