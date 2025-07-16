import { PageError401 } from "../pages/public/Error401.js";

export async function isAdmin(req, res, next) {
    if (!req.user.isLoggedIn) {
        return res.send(await new PageError401(req).render());
    }

    return next();
}