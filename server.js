const express = require('express')
const app = express()
const useRouter = require('./src/Routers/api/Api.js')

const PORT = process.env.PORT || 3000

app.use('/api', useRouter)

app.listen(PORT, ()=>{
    console.log(`App rodando na porta: ${PORT}`)
})
