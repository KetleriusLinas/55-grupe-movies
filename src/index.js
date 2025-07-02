import express from 'express';
import { PORT } from './env.js';
import { PageError404 } from './pages/Error404.js';
import { publicRouter } from './routes/publicRouter.js';
import { publicApiRouter } from './routes/publicApiRouter.js';


const app = express();

app.use(express.static('public'));

app.use('/', publicRouter);
app.use('/', publicApiRouter);


app.get('*error', (req, res) => {
    return res.send(new PageError404().render())
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});

