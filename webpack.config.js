const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            loader: "css-loader",
            options: {
            url: false,
          },
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
                'file-loader',
            ],
        },
      ],
      loaders: [
        { test: /\.json$/, 
          loader: 'json' },
        // other loaders 
     ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'src/templates/index.html'),
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                from: path.resolve(__dirname, 'src/public/images/heros/'),
                to: path.resolve(__dirname, 'dist/public/images/heros/'),
                },
            ],
        }),
    ],
  };