"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_1 = __importDefault(require("../../application/usecase/shop"));
const router = express_1.default.Router();
/*
 * 店舗一覧を返却するAPI
 */
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // 認証
        // validation
        // 店舗一覧の取得ユースケースの呼び出し
        let shopList = yield shop_1.default.GetShopList.getShopList();
        // レスポンス
        res.json({
            status: 'ok',
            shopList: shopList
        });
    });
});
exports.default = router;
