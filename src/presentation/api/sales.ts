import express from 'express'
import e, { Request, Response, NextFunction } from 'express'
import Shop from '../../application/usecase/shop'

const router = express.Router()

/* 
 * 店舗一覧を返却するAPI 
 */
router.get('/',async function(req:Request,res:Response,next:NextFunction){

    // 認証

    // validation

    // 店舗一覧の取得ユースケースの呼び出し
    let shopList = await Shop.GetShopList.getShopList()

    // レスポンス
    res.json({
        status:'ok',
        shopList:shopList
    })
})

export default router