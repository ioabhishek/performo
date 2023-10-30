const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      '/api', 
      createProxyMiddleware({
         target: 'https://performo.in',
         changeOrigin: true,
         headers: {
         'Origin': 'http://localhost:3000',
         },
      })
   );
};
