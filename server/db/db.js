'use strict';

const debug = require('debug');
const sql = debug('sql');

const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost/ourphotos', {
  logging: sql,
  define: { underscored: true }
});

module.exports = db;
