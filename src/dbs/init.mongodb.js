'use strict';

const { default: mongoose } = require('mongoose');
const { countConnect } = require('../helpers/check.connect');
const { db } = require('../config/config.mongodb');
const connectString = `mongodb://${db.host}:${db.port}/${db.name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: 'red' });
    }

    mongoose
      .connect(connectString)
      .then(() => {
        console.log('Connected to Mongodb');
        countConnect();
      })
      .catch((e) => console.log('Error when connect mongodb', e));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
