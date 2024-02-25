//jestConfig.bootstrap.js
require('@babel/register')({
    extensions: ['.js', '.jsx'], // List the extensions you want to compile
    presets: ['@babel/preset-env', '@babel/preset-react'], // Specify Babel presets
  });
  