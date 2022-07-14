"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Nicholas Stevens",
          phone: 123456789,
          email: "nick@n.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vicky Stevens",
          phone: 123456788,
          email: "vicky@v.com",
          password: "blahblah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
