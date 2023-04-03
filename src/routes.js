const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/uploadConfig')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')

const router = express.Router();
const upload = multer(uploadConfig)

//req.query - acessar dados enviados por GET
//req.params - acessar query params (:id)
//req.body - acessar parametros do corpo da requesicao (POST, PUT, DELETE)

router.get('/users', (req, res) => {

    // acessar query params
    return res.json({message: 'Olá mundo!', age: req.query.age})
})

router.put('/users/:id', (req, res) => {

    // acessar route params para exibir o id
    return res.json({id: req.params.id})
})

router.post('/sessions', SessionController.store)

router.post('/spots', upload.single('thumbnail') ,SpotController.store)
router.get('/spots', SpotController.index)
router.get('/dashboard', DashboardController.show)

router.post('/spots/:spot_id/bookings', BookingController.store)

router.post('/bookings/:booking_id/approvals', ApprovalController.store)
router.post('/bookings/:booking_id/rejections', RejectionController.store)

module.exports = router
