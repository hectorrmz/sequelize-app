"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Hector",
        lastname: "Ramirez",
        phone: "8384283428",
        email: "mail@mail.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: "Erik",
        lastname: "Jimenez",
        phone: "83948939344",
        email: "erik@mail.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
