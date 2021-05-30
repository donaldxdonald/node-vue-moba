module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/moba/admin/'
    : '/',
  outputDir: __dirname + '/../server/admin'
}