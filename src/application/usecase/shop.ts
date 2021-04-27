import db from '../../domain/models/index'

class RegisterSales{

  constructor(
    private shopId:number,
    private salesDate:Date,
    private salesInfo:[number,number][]
  ) { }
  
  /*
   * 登録メソッド
   */
  async registerSales(): Promise<boolean> {
    
    // 売上の登録、在庫の減算
    return true
  }
}

class GetShopList{

    /* 
    * 店舗一覧の取得メソッド
    */
    static async getShopList() {
    
        try{
            let shopList = await db.Shop.findAll()

            //レスポンスの型定義
            let reslut :{
                id?:number,
                shopName?:string
            }[] = new Array()
            
            shopList.forEach(shop => {
                reslut.push({
                id:shop.id,
                shopName:shop.shopName
                })
            })

            return reslut
            
        }catch(err){
            console.log(err)
            return null
        }
    }
}

export default {RegisterSales,GetShopList}