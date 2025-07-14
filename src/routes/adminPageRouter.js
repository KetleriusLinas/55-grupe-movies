import express from 'express';
import { PageDashboard } from '../pages/admin/Dashbord.js'
import { PageAdminCategories } from '../pages/admin/categories/Categories.js';
import { PageAdminCategoriesPublished } from '../pages/admin/categories/CategoriesPublished.js';
import { PageAdminCategoriesDraft } from '../pages/admin/categories/CategoriesDraft.js';
import { PageAdminCategoriesNew } from '../pages/admin/categories/CategoriesNew.js';

import { PageAdminMovies } from '../pages/admin/movies/Movies.js';
import { PageAdminMoviesPublished } from '../pages/admin/movies/MoviesPublished.js';
import { PageAdminMoviesDraft } from '../pages/admin/movies/MoviesDraft.js';
import { PageAdminMoviesNew } from '../pages/admin/movies/MoviesNew.js';

export const adminPageRouter = express.Router();

adminPageRouter.get('/', async (req, res) => {
    return res.send(await new PageDashboard(req).render())
});


adminPageRouter.get('/categories', async (req, res) => {
    return res.send(await new PageAdminCategories(req).render())
});

adminPageRouter.get('/categories/published', async (req, res) => {
    return res.send(await new PageAdminCategoriesPublished(req).render())
});

adminPageRouter.get('/categories/draft', async (req, res) => {
    return res.send(await new PageAdminCategoriesDraft(req).render())
});
adminPageRouter.get('/categories/new', async (req, res) => {
    return res.send(await new PageAdminCategoriesNew(req).render())
});
adminPageRouter.get('/categories/:urlSlug', async (req, res) => {
    return res.send(await new PageAdminCategoriesNew(req).render())
});
adminPageRouter.get('/categories/:urlSlug/edit', async (req, res) => {
    return res.send(await new PageAdminCategoriesNew(req).render())
});

adminPageRouter.get('/Movies', async (req, res) => res.send(await new PageAdminMovies(req).render()));
adminPageRouter.get('/Movies/published', async (req, res) => res.send(await new PageAdminMoviesPublished(req).render()));
adminPageRouter.get('/Movies/draft', async (req, res) => res.send(await new PageAdminMoviesDraft(req).render()));
adminPageRouter.get('/Movies/new', async (req, res) => res.send(await new PageAdminMoviesNew(req).render()));
