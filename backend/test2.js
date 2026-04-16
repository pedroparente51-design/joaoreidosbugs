const axios = require('axios');
async function run() {
  try {
    await axios.post('http://localhost:3001/api/user/reset-data');
  } catch(e) {
    console.log("STATUS:", e.response ? e.response.status : e.message);
  }
}
run();
