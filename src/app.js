import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

export default new class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        mongoose.connect(process.env.CONNECTION_STRING);

        this.middlewares();
        this.routes();
    }

    set port(prt) {
        let selectPort;

        if(typeof prt === "string") {
            selectPort = Number(prt);
        } else {
            selectPort = prt;
        }

        this._port = selectPort;
    }

    get port() {
        return this._port;
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(routes.getRoutes());
    }

    listen() {
        this.app.listen(this.port, ()=>{
            return console.log(`
                                Servidor Online!
                        Vá para: http://localhost:${this.port}
            `)
        })
    }

    run() {
        this.listen();
    }
}

