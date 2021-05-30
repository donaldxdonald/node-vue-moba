module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/moba/'
    : '/',
  outputDir: __dirname + '/../server/web'
}