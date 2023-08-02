import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config';

const db = new Sequelize("agenciaviajes", process.env.DB_USR, process.env.DB_PASSW, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases:false
});

export default db;