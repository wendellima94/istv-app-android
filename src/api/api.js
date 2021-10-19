import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://25.95.84.115/cliente/plural/api/v1/colaborador/',
  baseURL: 'https://istv.com.br/atributos/',
});

export default api;
