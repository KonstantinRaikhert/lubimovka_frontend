const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const environment = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev: environment === 'development' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    const apiBaseUrl = process.env.API_BASE_URL || (environment === 'development' && 'https://lubimovka.kiryanov.ru/api/v1') || '';

    server.get('/privacy-policy', (request, response) => {
      // TODO: исправить путь к файлу, когда он появится
      response.sendFile(__dirname + '/privacy-policy.pdf');
    });

    server.use(
      '/api',
      createProxyMiddleware({
        target: apiBaseUrl,
        pathRewrite: {
          '^/api': '/',
        },
        changeOrigin: true,
      }),
    );

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (error) => {
      if (error) {
        throw error;
      }
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
