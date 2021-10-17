const BookEntity = require('./entities/BookEntity');

const connectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'testuser',
  password: 'testuser123',
  database: 'pagination_tutorial_db',
  synchronize: true,
  entities: [BookEntity],
};

module.exports = connectionOptions;
