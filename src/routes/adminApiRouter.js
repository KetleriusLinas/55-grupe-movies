import express from 'express';
import { postCategories } from '../api/admin/categories/postCategories.js';
import { deleteCategories } from '../api/admin/categories/deleteCategories.js';
import { putCategories } from '../api/admin/categories/putCategories.js';
import { postMovies } from '../api/admin/movies/postMovies.js';

export const adminApiRouter = express.Router();

adminApiRouter.post('/categories', postCategories);
adminApiRouter.put('/categories/:original_url', putCategories);
adminApiRouter.delete('/categories/:url', deleteCategories);

adminApiRouter.post('/movies', postMovies);
