
import axios from 'axios';

// URL DA API https://superheroapi.com/api/access-token/character-id/image


const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});

export default api;