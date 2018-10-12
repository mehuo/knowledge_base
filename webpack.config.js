/**
 * Created by caidi on 16/6/1.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './www/static/app/app.js',
    output: { path: path.join(__dirname,'www/static/app/'), filename: 'bundle.js' },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude:/(platforms|plugins|node_modules|lib)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'www/static/js'],
    }
};
