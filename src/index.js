import express from 'express';
import { PORT } from './env.js';
import { PageHome } from './pages/Home.js';


const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.send(new PageHome().render())
});

app.get('*error', (req, res) => {
    return res.send('ERROR PAGE')
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});

