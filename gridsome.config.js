module.exports = {
  siteName: 'Maxwell Barnes',
  siteUrl: 'http://max.barnesy.me',
  siteDescription: 'This is my website',
  titleTemplate: '%s - Maxwell Barnes',
  icon: 'src/favicon.png',

  chainWebpack (config) {
    config.mode('development')
    config.resolve.alias.set('@images', '@/assets/images')
  }
}
