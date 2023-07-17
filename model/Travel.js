import { Sequelize } from "sequelize";
import db from "../config/db";

export const travel = db.define('viajes', {
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    date_init: {
        type: Sequelize.DATE
    },
    date_final: {
        type: Sequelize.DATE
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