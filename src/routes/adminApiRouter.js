import express from 'express';
import { postCategories } from '../api/admin/postCategories.js';

export const adminApiRouter = express.Router();

adminApiRouter.post('/categories', postCategories);