// $ npm install --dev postcss-cssnext
// babel-plugin-react-html-attrs

const path = require('path')

module.exports = {
  type: 'react-app',
  babel: {
    plugins: ['react-html-attrs'],
    stage: 0
  },
  webpack: {
    aliases: {
      components: path.resolve('src/components'),
      containers: path.resolve('src/containers'),
      styles: path.resolve('src/styles')
    },
    html: {
      mountId: 'root',
      favicon: 'public/favicon.ico'
    },
    rules: {
      css: {
        modules: true,
        localIdentName: ('[local]--[hash:base64:5]')
      },
      postcss: {
        plugins: [
          require('postcss-cssnext')
        ]
      }
    }
  }
}
