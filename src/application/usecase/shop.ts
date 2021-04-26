import Models from '../../domain/models/index'

class RegisterSales{

  constructor(
    private shopId:number,
    private salesDate:Date,
    private salesInfo:[[number,number]]
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
      return await Models.Shop.findAll()
  }
}

export default {RegisterSales,GetShopList}