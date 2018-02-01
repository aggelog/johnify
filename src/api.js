import axios from 'axios';

const TENOR_API_KEY = "1CXXQV8HXG5K";

const searchUrl = query => `https://api.tenor.com/v1/search?q=${query}&key=${TENOR_API_KEY}`;
const getSingleGif = id => `https://api.tenor.com/v1/gifs?ids=${id}&key=${TENOR_API_KEY}`;
const searchMore = (query, next) => `https://api.tenor.com/v1/search?q=${query}&key=${TENOR_API_KEY}&pos=${next}`;

export const searchGif = query =>
  axios.get(searchUrl(query), { headers: { Accept: 'application/json' } })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });

export const searchMoreGifs = (query, next) =>
  axios.get(searchMore(query, next), { headers: { Accept: 'application/json' } })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });

export const getSingleById = id =>
  axios.get(getSingleGif(id), { headers: { Accept: 'application/json' } })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
