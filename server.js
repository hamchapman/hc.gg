const express = require('express');
const nextApp = require('next');

const posts = require('./posts.json');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    if (req.path.substr(-1) === '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length);
      res.redirect(301, req.path.slice(0, -1) + query);
    } else {
      next();
    }
  });

  server.get('/posts', (req, res) => {
    res.json(posts);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`); // eslint-disable-line no-console
  });
});
