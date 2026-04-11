const http = require('http');
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/notifications/public-key',
  method: 'GET',
};
const req = http.request(options, (res) => {
  console.log('STATUS:', res.statusCode);
  res.on('data', d => console.log(d.toString()));
});
req.on('error', e => console.error(e));
req.setTimeout(3000, () => {
    console.log('TIMEOUT');
    req.destroy();
});
req.end();
