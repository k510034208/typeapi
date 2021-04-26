"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(path_1.default.join(__dirname, './database.json'))[env];
exports.sequelize = new sequelize_1.Sequelize(config);
