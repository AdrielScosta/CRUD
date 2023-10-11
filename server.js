const express = require('express')
const app = express()
const useRouter = require('./src/Routers/api/Api.js')
const cors = require('cors')

const PORT = process.env.PORT || 80

app.use(cors())

app.use('/api', useRouter)
app.get('/', (req, res)=>{
    res.send("Conectado Home")
})

app.listen(PORT, ()=>{
    console.log(`App rodando na porta: ${PORT}`)
})
