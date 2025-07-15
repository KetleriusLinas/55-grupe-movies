import express from 'express';
import { postCategories } from '../api/admin/postCategories.js';
import { deleteCategories } from '../api/admin/deleteCategories.js';
import { putCategories } from '../api/admin/putCategories.js';

export const adminApiRouter = express.Router();

adminApiRouter.post('/categories', postCategories);
adminApiRouter.put('/categories/:original_url', putCategories);
adminApiRouter.delete('/categories/:url', deleteCategories);