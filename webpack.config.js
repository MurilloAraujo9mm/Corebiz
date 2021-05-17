const modeDev = process.env.NODE_ENV !== 'production'
import webpack from 'webpack';
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export const mode = modeDev ? 'development' : 'production';
export const entry = './src/index.js';
export const output = {
    filename: 'index.js',
    path: __dirname + '/public'
};
export const optimization = {
    minimizer: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
};
export const plugins = [
    new MiniCssExtractPlugin({})
];
export const module = {
    rules: [{
        test: /\.css$/,
        use: [
            loader,
            'css-loader'
        ]
    }, {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ['file-loader']
    }]
};