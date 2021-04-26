"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routing
const sales_1 = __importDefault(require("./presentation/api/sales"));
app.use('/api/sales', sales_1.default);
app.listen(3000, () => {
    console.log('Server Starts.');
});
