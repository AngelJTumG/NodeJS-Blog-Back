"use strict"

import express from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import { dbConnection } from "./mongo.js";
import { swaggerDocs, swaggerUi } from "./swagger.js";
import rateLimit from "express-rate-limit";


const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: "Demasiadas solicitudes desde esta IP, por favor intenta de nuevo más tarde."
});

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(apiLimiter);
};

const routes = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

const conectarDB = async () => {
    try {
        await dbConnection();
    } catch (err) {
        console.log(`Database connection failed: ${err}`);
        process.exit(1);
    }
};

export const initServer = () => {
    const app = express();
    try {
        middlewares(app);
        conectarDB();
        routes(app);
        app.use((err, req, res, next) => {
            console.error('Error no manejado:', err);

            res.status(err.status || 500).json({
                message: err.message || 'Error interno del servidor',
                stack: process.env.NODE_ENV === 'production' ? null : err.stack
            });
        });

        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.log(`Server init failed: ${err}`);
    }
};