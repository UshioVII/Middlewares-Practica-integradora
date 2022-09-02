const router = require('express').Router();

const {index, contact, about, services, admin, login} = require('../controllers/mainController');

const adminCheck = require('../middlewares/adminCheck');

router.get('/', index)
router.get('/contact', contact)
router.get('/about', about)
router.get('/services', services)
router.get('/admin', adminCheck, admin)
router.get('/login', login)

module.exports = router;