const SpotModel = require('../models/Spot')
const UserModel = require('../models/User')

module.exports = {

    async index(req, res) {
        const { tech } = req.query
        const spots = await SpotModel.find({ techs: tech})
        return res.json(spots);
    },

    show(req, res) {

    },

    async store(req, res) {

        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const userExists = await UserModel.findById(user_id)

        if(!userExists) {
            return res.status(400).json({message: 'Usuário não existe'})
        }
        
        const spot = await SpotModel.create({
            user: user_id,
            company: company,
            techs: techs.split(",").map(tech => tech.trim()),
            thumbnail: filename,
            price: price
        })

        return res.json(spot)
    },

    update(req, res) {

    },

    destroy(req, res) {

    }

}