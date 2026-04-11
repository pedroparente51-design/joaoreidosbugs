const axios = require('axios');
const api = axios.create({ baseURL: '/api' });
console.log(api.getUri({ url: '/notifications/test' }));
console.log(api.getUri({ url: 'notifications/test' }));
