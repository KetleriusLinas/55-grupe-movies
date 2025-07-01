import express from 'express';
import { PORT } from './env.js';
import { PageHome } from './pages/Home.js';
import { PageError404 } from './pages/Error404.js';
import { PageMovies } from './pages/Movies.js';
import { PageCategories } from './pages/Categories.js';
import { PageLogin } from './pages/Login.js';
import { PageRegister } from './pages/Register.js';


const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.send(new PageHome().render())
});

app.get('/movies', (req, res) => {
    return res.send(new PageMovies().render())
});

app.get('/categories', (req, res) => {
    return res.send(new PageCategories().render())
});

app.get('/login', (req, res) => {
    return res.send(new PageLogin().render())
});

app.get('/register', (req, res) => {
    return res.send(new PageRegister().render())
});

app.get('*error', (req, res) => {
    return res.send(new PageError404().render())
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});

