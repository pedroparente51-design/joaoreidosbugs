const jwt = require('jsonwebtoken');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const SECRET = process.env.JWT_SECRET || 'fallback_secret';
// Generate token for userId: 1
const token = jwt.sign({ userId: 1, role: 'ADMIN' }, SECRET, { expiresIn: '1d' });

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/user/reset-data',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('STATUS:', res.statusCode, 'BODY:', data));
});

req.on('error', e => console.error('Error:', e.message));
req.end();
