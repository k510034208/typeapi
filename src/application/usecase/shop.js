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
const index_1 = __importDefault(require("../../domain/models/index"));
class RegisterSales {
    constructor(shopId, salesDate, salesInfo) {
        this.shopId = shopId;
        this.salesDate = salesDate;
        this.salesInfo = salesInfo;
    }
    /*
     * 登録メソッド
     */
    registerSales() {
        return __awaiter(this, void 0, void 0, function* () {
            // 売上の登録、在庫の減算
            return true;
        });
    }
}
class GetShopList {
    /*
    * 店舗一覧の取得メソッド
    */
    static getShopList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let shopList = yield index_1.default.Shop.findAll();
                //レスポンスの型定義
                let reslut = new Array();
                shopList.forEach(shop => {
                    reslut.push({
                        id: shop.id,
                        shopName: shop.shopName
                    });
                });
                return reslut;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
}
exports.default = { RegisterSales, GetShopList };
