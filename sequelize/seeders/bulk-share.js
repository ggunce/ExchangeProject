'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shares', [{ 
      name: 'ABC',
      amount: 55.66, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'XYZ',
      amount: 4.2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'GGG',
      amount: 44.30, 
      createdAt: new Date(),
      updatedAt: new Date()
    }], { validate: true } );
},

async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Shares', null, {});
}
};
