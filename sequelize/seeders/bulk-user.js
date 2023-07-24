'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [{
        id: 22, 
        name: 'Britney Spears', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        id:23,
        name: 'Amy Winehouse', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        id:24,
        name: 'Charles Dickens', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        id:25,
        name: 'Brad Pitt', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        id:26,
        name: 'Shakira', 
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
