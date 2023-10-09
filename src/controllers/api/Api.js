class Api{

    rotaGet(req, res){
        res.send({data: 'Rota Get'})
    }

    rotaPost(req, res){
        res.send({data: 'Rota Post'})
    }

    rotaPut(req, res){
        res.send({data: 'Rota Put'})
    }

    rotaDelete(req, res){
        res.send({data: 'Rota Delete'})
    }

}

module.exports = new Api()