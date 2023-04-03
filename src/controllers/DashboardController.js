const SpotModel = require('../models/Spot')

module.exports = {

    async index(req, res) {
        
    },

    async show(req, res) {
        const { user_id } = req.headers
        const spots = await SpotModel.find({user: user_id})
        return res.send(spots)
    },

    async store(req, res) {

    },

    update(req, res) {

    },

    destroy(req, res) {

    }

}