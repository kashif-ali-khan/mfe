const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'host',
          filename: 'remoteEntry.js',
          remotes: {
            mf1: 'mf1@http://localhost:3001/remoteEntry.js',
            mf2: 'mf2@http://localhost:3002/remoteEntry.js',
            angularMfe: 'angularMfe@http://localhost:4201/remoteEntry.js',
          
          },
          shared: {
            // '@angular/core': { singleton: true, strictVersion: false },
            // '@angular/common': { singleton: true, strictVersion: false },
            // '@angular/router': { singleton: true, strictVersion: false },
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        }),
      ],
    },
  },
};