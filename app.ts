import express, { Request, Response, NextFunction } from 'express';
import { genZTranslate } from './src/genZTranslate';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/css', express.static(path.join(__dirname, 'public/styles')));

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.use('/styles', express.static(path.join(__dirname, 'public/styles'), {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.get('/', (req: Request, res: Response) => {
  res.render('index', { translation: '' });
});

app.post('/', (req: Request, res: Response) => {
  const text = req.body.text;
  const translated = genZTranslate(text);

  res.render('index', { translation: translated });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
