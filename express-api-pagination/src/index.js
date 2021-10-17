const express = require('express');
const cors = require('cors');
const { createConnection, getRepository } = require('typeorm');
const connectionOptions = require('./database/connectionOptions');
const BookEntity = require('./database/entities/BookEntity');

const app = express();
const PORT = process.env.PORT || 6004;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/books', async (req, res) => {
  // Page = 0, Count = 10. Offset = 0
  // Page = 1, Count = 10. Offset = 10
  // Page = 2, Count = 10. Offset = 20
  const { count, page } = req.query;
  if (!count || !page)
    return res.status(400).send({ error: 'Missing Query Parameters' });

  const countInt = parseInt(count);
  const pageInt = parseInt(page);
  const offset = countInt * pageInt;

  if (isNaN(countInt) || isNaN(pageInt))
    return res
      .status(400)
      .send({ error: 'Invalid Value for Query Parameters' });

  if (countInt <= 0 || pageInt < 0)
    return res
      .status(400)
      .send({ error: 'Query Parameters cannot contain negative value!' });

  const repository = getRepository(BookEntity);
  const [results, total] = await repository.findAndCount({
    take: countInt,
    skip: offset,
  });
  res.send({ results, total });
});

app.get('/api/cars', (req, res) => {
  res.send(200);
});

async function bootstrap() {
  try {
    await createConnection(connectionOptions);
    app.listen(PORT, () => console.log(`Server is running on Port ${PORT}.`));
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
