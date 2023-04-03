const SpotModel = require('../models/Spot')
const UserModel = require('../models/User')
const BookingModel = require('../models/Booking')

module.exports = {

    async index(req, res) {

    },

    show(req, res) {

    },

    async store(req, res) {

        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body

        const booking = await BookingModel.create({
            user: user_id,
            spot: spot_id,
            date
        })

        await booking.populate('spot').populate('user').execPopulate()

        const ownerSocket = req.connectedUsers[booking.spot.user]

        if(ownerSocket) {
          req.io.to(ownerSocket).emit('booking_request', booking)
        }

        return res.json(booking)

    },

    update(req, res) {

    },

    destroy(req, res) {

    }

}
