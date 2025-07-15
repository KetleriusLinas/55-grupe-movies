import express from 'express';
import { PageHome } from '../pages/public/Home.js';
import { PageMovies } from '../pages/public/Movies.js';
import { PageCategories } from '../pages/public/Categories.js';
import { PageLogin } from '../pages/public/Login.js';
import { PageRegister } from '../pages/public/Register.js';

export const publicPageRouter = express.Router();

publicPageRouter.get('/',async (req, res) => {
    return res.send(await new PageHome(req).render())
});

publicPageRouter.get('/movies',async (req, res) => res.send(await new PageMovies(req).render()));

publicPageRouter.get('/categories',async (req, res) => {
    return res.send(await new PageCategories(req).render())
});

publicPageRouter.get('/login',async (req, res) => {
    return res.send(await new PageLogin(req).render())
});

publicPageRouter.get('/register',async (req, res) => {
    return res.send(await new PageRegister(req).render())
});
