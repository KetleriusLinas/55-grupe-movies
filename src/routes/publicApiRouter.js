import express from "express";
import { postRegister } from "../api/public/postRegister.js";

export const publicApiRouter = express.Router();

publicApiRouter.post ('/api/register', postRegister);
