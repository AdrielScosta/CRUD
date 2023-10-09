const express = require('express')
const app = express()
const useRouter = require('./src/Routers/api/Api.js')
const cors = require('cors')

const PORT = process.env.PORT || 3333

app.use(cors())

app.use('/api', useRouter)

app.listen(PORT, ()=>{
    console.log(`App rodando na porta: ${PORT}`)
})