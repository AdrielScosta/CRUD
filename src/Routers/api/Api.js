const express = require('express')
const routers = express.Router()
const Api = require('../../controllers/api/Api.js');


routers.get('/', Api.rotaGet)
routers.post('/', Api.rotaPost)
routers.put('/', Api.rotaPut)
routers.delete('/', Api.rotaDelete)

module.exports = routers;