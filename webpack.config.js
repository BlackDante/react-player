module.exports = {
    context: __dirname + '/app/js',
    entry: './app.js',

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
