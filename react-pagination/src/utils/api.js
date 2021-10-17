import axios from 'axios';

export const fetchBooks = (count, page) =>
  axios.get(`http://localhost:6004/api/books?count=${count}&page=${page}`);
