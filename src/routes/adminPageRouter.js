import express from 'express';
import { PageDashboard } from '../pages/admin/Dashbord.js'

export const adminPageRouter = express.Router();

adminPageRouter.get('/admin', (req, res) => {
    return res.send(new PageDashboard(req).render())
});
