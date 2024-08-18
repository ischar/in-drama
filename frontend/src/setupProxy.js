const { createProxyMiddleware } = require('http-proxy-middleware');
const targetUrl = process.env.REACT_APP_SERVER_URL;


module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: targetUrl,
      changeOrigin: true,
    })
  )
};