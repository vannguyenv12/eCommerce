'use strict';

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'shopDev',
  },
};

const prod = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT) || 3000,
  },
  db: {
    host: process.env.PROD_DB_HOST || 'localhost',
    port: process.env.PROD_DB_PORT || 27017,
    name: process.env.PROD_DB_NAME || 'shopProd',
  },
};

const config = { dev, prod };
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];
