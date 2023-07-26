const app = require('./src/app');
const config = require('./src/config/config.mongodb');

const PORT = config.app.port;

const server = app.listen(PORT, () => console.log(`Start on port ${PORT}`));

process.on('SIGINT', () => {
  server.close(() => console.log('Exit Server Express'));
});
