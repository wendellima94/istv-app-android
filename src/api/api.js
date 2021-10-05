import axios from 'axios';

const api = axios.create({
  baseURL: 'https://istv.com.br/atributos/',
});

// https://istv.com.br/atributos/streaming.php

export default api;