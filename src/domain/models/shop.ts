import { Model, DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../../infrastructure/sequelize'

//型定義
class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    public id?:number
    public shopName?:string

    public readonly createdAt?:Date
    public readonly updatedAt?:Date

    // CRUD
    public static findByShopName: (shopName:string) => Promise<Shop|null>
}

// モデル定義
Shop.init({
    id:{
        type:DataTypes.NUMBER,
        autoIncrement:true,
        primaryKey:true
    },
    shopName:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    tableName:'shops',
    sequelize:sequelize,
})

Shop.findByShopName = async (shopName:string) =>
    Shop.findOne({
        where:{ shopName:shopName }
    })

export default Shop