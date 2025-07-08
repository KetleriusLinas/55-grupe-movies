import express from 'express';
import { PORT } from './env.js';
import { PageError404 } from './pages/public/Error404.js';
import { publicRouter } from './routes/publicPageRouter.js';
import { publicApiRouter } from './routes/publicApiRouter.js';
// import { adminPageRouter } from './routes/adminPageRouter.js';


const app = express();

app.use(express.static('public'));
app.use(express.json());


app.use('/', publicRouter);
app.use('/', publicApiRouter);
// app.use('/', adminPageRouter);


app.get('*error', (req, res) => {
    return res.send(new PageError404().render())
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});

