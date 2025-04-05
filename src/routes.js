import { Router } from "express";
import AdminController from "./controllers/AdminController/index.js";
import isAutenticated from "./middlewares/isAutenticated.js";
import GenderController from "./controllers/GenderController/index.js";
import MovieController from "./controllers/MovieController/index.js";
import SeasonController from "./controllers/SeasonController/index.js";

export default new class RouterApp {
    constructor() {
        this.routes = Router();
        this.setRoutes();
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    home(req, res) {
        return res.json({
            server: "Online!",
        })
    }

    admin() {
        this.routes.post('/admin', AdminController.create);
        this.routes.post('/session', AdminController.auth);
        this.routes.get('/admin', isAutenticated, AdminController.index);
        this.routes.get('/admin/:id', isAutenticated, AdminController.show);
        this.routes.put('/admin/:id', isAutenticated, AdminController.update);
        this.routes.delete('/admin/:id', isAutenticated, AdminController.delete);
    }

    gender() {
        this.routes.get('/gender', isAutenticated, GenderController.index);
        this.routes.post('/gender', isAutenticated, GenderController.create);
        this.routes.get('/gender/:id', isAutenticated, GenderController.show);
        this.routes.put('/gender/:id', isAutenticated, GenderController.update);
        this.routes.delete('/gender/:id', isAutenticated, GenderController.delete);
    }

    movie() {
        this.routes.post('/movie', isAutenticated, MovieController.create);
        this.routes.get('/movie', MovieController.index);
        this.routes.get('/movie/:id', MovieController.show); 
    }

    season() {
        this.routes.post('/season', isAutenticated, SeasonController.create);
        this.routes.get('/season', SeasonController.index);
        this.routes.get('/season/:id', SeasonController.show);
    }

    setRoutes() {
        this.routes.get('/', this.home);
        this.admin();
        this.gender();
        this.movie();
        this.season();
    }

    getRoutes() {
        return this.routes;
    }
}
