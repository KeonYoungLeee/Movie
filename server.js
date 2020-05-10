const express = require('express');
const next = require('next');
const morgan = require('morgan');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';

const prod = process.env.NODE_ENV == 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then( () => {
  const server = express();
  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  
  server.get('/detail/:movieid', (req, res) => {
    console.log(req.params);
    return app.render(req, res, '/detail', {movieid: parseInt(req.params.movie_id, 10)});
  });
    
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log('next-express running on port 3000');
  });
});

