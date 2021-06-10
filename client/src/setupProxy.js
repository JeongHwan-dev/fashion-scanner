const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com:8001',
      changeOrigin: true,
    }),
  );
};
