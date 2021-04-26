import path from 'path'
import {Sequelize} from 'sequelize'

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname , './database.json'))[env]

export const sequelize = new Sequelize(config)