const path = require('path')

module.exports = {
        devServer: {
                static: {
                  directory: path.resolve(__dirname, 'dist'),
                },
                compress: true,
                port: 8000
        },
        entry: {
                index: "./src/js/index.js"
        },
        mode: "development",
        module:{
                rules: [{
                        test: /\.css$/,
                        use: ['style-loader','css-loader']
                },{
                        test: /\.js$/,
                        use: ['babel-loader']
                }]
        },
        output: {
                path: path.resolve(__dirname,'dist'),
                filename: "[name].min.js",
                publicPath: '/',
        }
}