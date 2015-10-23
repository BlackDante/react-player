module.exports = {
    context: __dirname + '/app/js',
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './app.js' // Your appʼs entry point
    ],

    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader'],
            }
        ]
    }
};
