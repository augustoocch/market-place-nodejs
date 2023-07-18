import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Travel = db.define('viajes', {
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    date_init: {
        type: Sequelize.STRING
    },
    date_final: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING

    },
    available: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
})