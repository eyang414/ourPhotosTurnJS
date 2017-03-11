'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Photos = db.define('photos', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300'
  }
});

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true
		}
  },
  password: Sequelize.STRING
})

module.exports = Photos, User;
