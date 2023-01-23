const path = require('path')

module.exports = {
        devServer: {
                static: {
                        directory: path.resolve(__dirname,'dist')
                }
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
                filename: "[name].min.js"
        }
}