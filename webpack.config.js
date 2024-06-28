const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './App/Components/index.jsx', // Caminho para o seu arquivo principal de entrada
  output: {
    path: path.resolve(__dirname, 'public'), // Diretório de saída para os arquivos construídos
    filename: 'bundle.js', // Nome do arquivo de saída
    publicPath: '/frontEnd/public/',
  },
  module: {
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
              context: 'public',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
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
        pathRewrite: {'^/api': ''},
      },
    ],
  },
  plugins: [
    new Dotenv()
  ]
};
