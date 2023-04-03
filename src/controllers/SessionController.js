/*
    index - lista todos os registros
    show - lista apenas um registro
    store - armazena um registro
    update - atualiza um registro
    destroy - remove um registro
*/

const UserModel = require('../models/User')

module.exports = {

    index(req, res) {

    },

    show(req, res) {

    },

    async store(req, res) {
        const email = req.body.email

        let user = await UserModel.findOne({ email: email })

        if(!user) {
            user = await UserModel.create({ email })
        }

        return res.json(user)
    },

    update(req, res) {

    },

    destroy(req, res) {

    }

}
