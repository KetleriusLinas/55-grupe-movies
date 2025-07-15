import express from 'express';
import { postCategories } from '../api/admin/postCategories.js';
import { deleteCategories } from '../api/admin/deleteCategories.js';

export const adminApiRouter = express.Router();

adminApiRouter.post('/categories', postCategories);
adminApiRouter.delete('/categories/:url', deleteCategories);