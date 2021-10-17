const BookEntity = require('./entities/BookEntity');

const connectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: '',
  password: '',
  database: '',
  synchronize: true,
  entities: [BookEntity],
};

module.exports = connectionOptions;
