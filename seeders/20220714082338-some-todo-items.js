"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Read email",
          deadline: "morning",
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Send report",
          deadline: "lunchtime",
          todoListId: 1,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Do Filing",
          deadline: "lunchtime",
          todoListId: 3,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Shopping",
          deadline: "lunchtime",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
