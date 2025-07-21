import express from 'express';
import { postCategories } from '../api/admin/categories/postCategories.js';
import { deleteCategories } from '../api/admin/categories/deleteCategories.js';
import { putCategories } from '../api/admin/categories/putCategories.js';
import { postMovies } from '../api/admin/movies/postMovies.js';
import { deleteMovies } from '../api/admin/movies/deleteMovies.js';
import { putMovies } from '../api/admin/movies/putMovies.js';
import { uploadMovieThumbnailImage } from '../middleware/uploadMovieThumbnail.js';
import { postImageUpload } from '../api/admin/movies/postImageUpload.js';

export const adminApiRouter = express.Router();

adminApiRouter.post('/categories', postCategories);
adminApiRouter.put('/categories/:original_url', putCategories);
adminApiRouter.delete('/categories/:url', deleteCategories);

adminApiRouter.post('/movies', postMovies);
adminApiRouter.put('/movies/:original_url', putMovies);
adminApiRouter.delete('/movies/:url', deleteMovies);

adminApiRouter.post('/upload-image', uploadMovieThumbnailImage.single('img'), postImageUpload);
