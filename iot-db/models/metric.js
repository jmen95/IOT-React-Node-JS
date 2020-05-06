'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('metrics', {
    type: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
