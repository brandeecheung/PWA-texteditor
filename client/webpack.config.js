const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'TODOs List'
      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),

      new GenerateSW(), // Generates a service worker with Workbox


      // WebpackPwaManifest plugin to generate a PWA manifest file
      new WebpackPwaManifest({
        name: 'JATE App', 
        short_name: 'JATE', 
        description: 'Just Another Text Editor', 
        background_color: '#ffffff', 
        theme_color: '#000000',
        start_url: '/', 
        publicPath: '/', 
        icons: [
          {
            src: path.resolve('src/images/logo.png'), 
            sizes: [96, 128, 192, 256, 384, 512], 
            destination: path.join('assets', 'icons'), 
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
