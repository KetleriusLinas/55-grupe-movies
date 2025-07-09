import express from 'express';
import { PORT } from './env.js';
import { PageError404 } from './pages/public/Error404.js';
import { publicPageRouter } from './routes/publicPageRouter.js';
import { publicApiRouter } from './routes/publicApiRouter.js';
import { adminPageRouter } from './routes/adminPageRouter.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';
import { isAdmin } from './middleware/isAdmin.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(cookieParser);
app.use(userData);


app.use('/', publicPageRouter);
app.use('/', publicApiRouter);
app.use('/admin', isAdmin, adminPageRouter);



app.get('*error', (req, res) => {
    return res.send(new PageError404(req).render())
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});

