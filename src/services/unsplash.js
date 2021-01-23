import axios from 'axios';

const url =  'https://api.unsplash.com/';
const key = '9dDlHedUDbNXXSJW4j7P0rolynEwxZ-rNcUT-cCJOFY';

const unsplash = axios.create({
  baseURL:url,
  headers: {
    Authorization: `Client-ID ${key}`
  }
})

export const search = (term) => {
  return unsplash.get('https://api.unsplash.com/search/photos', {
    params: { query:term }
  })
}

