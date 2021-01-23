import axios from "axios";
const instance = axios.create({
    baseURL: 'http://ecommerce.hungvu.net',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 60000
});

export const login = (tamp) => instance.post('/login', tamp);

export const signup = (tamp) => instance.post('/signup', tamp);