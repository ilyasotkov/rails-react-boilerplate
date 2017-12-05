const { environment } = require('@rails/webpacker')
const merge = require('webpack-merge')

const myCssLoaderOptions = {
  modules: true,
  sourceMap: true,
  localIdentName: '[hash:base64:12]'
}

const CSSLoader = environment.loaders.get('style').use.find(el => el.loader === 'css-loader')

CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions)

module.exports = environment
