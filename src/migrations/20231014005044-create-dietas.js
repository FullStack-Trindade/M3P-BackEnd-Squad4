'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dietas', {
      die_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      die_nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      die_data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      die_hora: {
        allowNull: false,
        type: Sequelize.TIME
      },
      die_tipo: {
        allowNull: false,
        type: Sequelize.ENUM('Low Carb', 'Dash', 'Paleolítica', 'Cetogênica', 'Dukan', 'Mediterrânea', 'Outra')
      },
      die_descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      die_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pac_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pacientes',
          key: 'pac_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dietas');
  }
};

// Nome da Dieta: Obrigatório, com máximo e mínimo de 100 e 5 caracteres, respectivamente.
// Data: Obrigatório, buscando data atual do sistema e liberando para edição.
// Horário: Obrigatório, buscando horário atual do sistema e liberando para edição.
// Tipo: Obrigatório com dropdown de opções pré-definidas.
// Opções: Low Carb, Dash, Paleolítica, Cetogênica, Dukan, Mediterrânea, Outra.
// Descrição: Descrição da dieta executada pelo paciente.
// Status do Sistema: Obrigatório, apenas leitura, tipo booleano, iniciar sempre como ‘ativo’.
