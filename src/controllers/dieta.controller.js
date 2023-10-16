const { Sequelize } = require("sequelize");
const DB_CONFIG = require("../config/database");
const sequelize = new Sequelize(DB_CONFIG);
const Dietas = require('../models/Dietas')(sequelize, Sequelize);

class DietaController {
    async create(req, res) {
        try {
            const {
                die_nome,
                die_data,
                die_hora,
                die_tipo,
                die_descricao,
                pac_id,
            } = req.body
            
            const dietaCreated = await Dietas.create({
                die_nome,
                die_data,
                die_hora,
                die_tipo,
                die_descricao,
                pac_id,
                created_at: new Date(),
                updated_at: new Date()
            })

            return res.status(201).send(dietaCreated)
        } catch (error) {
            return res.status(400).send({
                message: "Erro na criação da Dieta",
                cause: error.message
            })
        }
    }
}

module.exports = new DietaController()