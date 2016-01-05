'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

   return [
    queryInterface.bulkInsert('Users', [
      { username: "Ashley", pwd: '23456', email: 'ashleyfisher@gmail.com', githubId: '13425640' },
      { username: "StevenBeaton", pwd: '12345', email: 'stephanybeaton@gmail.com' },
      { username: "Tanner", pwd: '34567', email: 'tanneready@shaw.ca' },
      { username: "Lakshmi", pwd: '45678', email: 'lakshmikotteda@hotmail.com' },
      { username: "Brittany", pwd: '56789', email: 'brittanyjsee@gmail.com' }
    ])
  ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
