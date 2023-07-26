const mongoose = require('mongoose');
const os = require('os');

const _SECONDS = 5000;

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Assume: Max nums of connection based on nums core
    const maxConnections = numCore * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log('Connection overload detect!');
    }
  }, _SECONDS);
};

module.exports = { countConnect, checkOverload };
