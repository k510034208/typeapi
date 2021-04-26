import express from 'express'
import e, { Request, Response, NextFunction } from 'express'
import Shop from '../../application/usecase/shop'

const router = express.Router()

/* 
 * 店舗一覧を返却するAPI 
 */
router.get('/',async function(req:Request,res:Response,next:NextFunction){

    let shopList = await Shop.GetShopList.getShopList()
    console.log(`shoplist:${shopList}`)
    res.json({
        status:'ok',
        shopList:shopList
    })
})

export default router