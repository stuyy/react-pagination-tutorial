const { EntitySchema } = require('typeorm');

const BookEntity = new EntitySchema({
  name: 'Book',
  tableName: 'books',
  columns: {
    id: {
      primary: true,
      type: 'bigint',
      generated: true,
    },
    title: {
      type: 'varchar',
      nullable: false,
      default: '',
    },
    author: {
      type: 'varchar',
      nullable: false,
      default: '',
    },
    yearPublished: {
      type: 'int',
      nullable: true,
      name: 'year_published',
    },
  },
});

module.exports = BookEntity;
