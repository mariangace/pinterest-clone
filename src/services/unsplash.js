import axios from 'axios';

const url =  'https://api.unsplash.com/';
const key = process.env.REACT_APP_UNSPLASH_KEY;

const unsplash = axios.create({
  baseURL:url,
  headers: {
    Authorization: `Client-ID ${key}`
  }
})

export const search = (term) => {
  return unsplash.get('https://api.unsplash.com/search/photos', {
    params: { query:term, per_page:20 }
  })
}

