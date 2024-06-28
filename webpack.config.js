import { resolve as _resolve, join } from 'path';
import Dotenv from 'dotenv-webpack';

export const entry = './App/Components/index.jsx';
export const output = {
  path: _resolve(__dirname, 'frontend/public'),
  filename: 'bundle.js',
  publicPath: '/frontEnd/public/',
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'frontend/public',
          },
        },
      ],
    },
  ],
};
export const resolve = {
  extensions: ['.js', '.jsx']
};
export const devServer = {
  static: {
    directory: join(__dirname, 'frontend/public'),
    watch: {
      ignored: /node_modules/,
    },
  },
  compress: true,
  port: 9000,
  historyApiFallback: true,
  proxy: [
    {
      context: ['/api'],
      target: 'https://contagemativabackend.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  ],
};
export const plugins = [
  new Dotenv()
];
