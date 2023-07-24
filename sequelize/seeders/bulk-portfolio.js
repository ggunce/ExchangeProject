'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Portfolios', [{ 
        userId: 22, 
        share: 'ABC',
        amount: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 22, 
        share: 'GGG',
        amount: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 23, 
        share: 'GGG',
        amount: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 24, 
        share: 'XYZ',
        amount: 500, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 25, 
        share: 'ABC',
        amount: 1500,  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 26, 
        share: 'GGG',
        amount: 300, 
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Portfolios', null, {});
  }
};
