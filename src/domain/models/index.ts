import {sequelize} from '../../infrastructure/sequelize'
import Shop from './shop'

export {sequelize}

const models = {
    Shop
}

export type Models = typeof models

export default models