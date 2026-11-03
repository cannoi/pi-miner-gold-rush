const http = require('http');
const PORT = process.env.PORT || 8080;

async function checkHealth() {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${PORT}/health`, (res) => {
      if (res.statusCode === 200) resolve(true);
      else reject(new Error('Health check failed'));
    }).on('error', reject);
  });
}

checkHealth().then(() => console.log('Health check passed')).catch(err => { console.error(err); process.exit(1); });