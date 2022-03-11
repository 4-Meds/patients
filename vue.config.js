const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8001/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'patients',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App'
        },
        shared: ['fhirclient', 'vue', 'bootstrap', 'bootstrap-vue']
      })
    ]
  },
  chainWebpack: config => {
    // See https://github.com/vuejs/vue-cli/issues/6318
    config.optimization.delete('splitChunks')
  }
})
