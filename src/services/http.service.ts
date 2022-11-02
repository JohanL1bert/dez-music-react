import axios from 'axios';

export const API_URL = `https://api.deezer.com`;

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
