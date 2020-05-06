'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('agents', {
    uuid: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    username: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
