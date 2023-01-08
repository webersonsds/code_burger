'use strict';


module.exports = {                                 // pedindo para o squelize criar uma tabela de usuarios
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {


      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,             
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,           // tem de ser unico email cadastrado
      },
      password_hash: {         // a senha do cliente vai ser criptografada antes de ser gravada no banco de dados
        type: Sequelize.STRING,
        allowNull: false,

      },
      admin: {                         // campo do adimistrador o app dono a anburgeria
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {         // vai ser criado altomaticamente pelo sequelize 
                               // vai colocar a data altomaticamente de quando o usuario foi criado
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {         // sempre vai ter a data da ultima atualizaçao do usuario
        type: Sequelize.DATE,
        allowNull: false
      },

    });
  },

  down: async (queryInterface) => {
    
      await queryInterface.dropTable('users')  // caso eu queira desfazer minha aplicaçao eu chamo essa funçao
    
  },
};

// esse comando e para criar uma migration => yarn sequelize db:migrate

// esse outro comando e para desfazer as minga migrations  

// todas as minbha migrations => yarn sequelize db:migrate:undo:all
// apenas a ultima mitration =>   yarn sequelize db:migrate:undo


// sempre para rodar uma migration o banco de dados tem de estar rodando
// rodar banco docker start codeburger-postgres
