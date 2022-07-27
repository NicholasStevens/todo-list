"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "itemTags",
      [
        {
          tagId: 1,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoItemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          todoItemId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoItemId: 3,
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
    await queryInterface.bulkDelete("itemTags", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
