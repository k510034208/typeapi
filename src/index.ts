import express from 'express'
const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routing
import salesApi from './presentation/api/sales'

app.use('/api/sales',salesApi)

app.listen(3000,()=>{
    console.log('Server Starts.')
})