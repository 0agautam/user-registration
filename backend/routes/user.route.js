const express       = require('express')
const router        = express.Router()

const UserController    = require('../controllers/UserController')
//const upload                = require('../middleware/upload')
//const authenticate          = require('../middleware/authenticate')

router.get('/', UserController.index)
router.get('/:id', UserController.show)
router.post('/store', UserController.store)
router.post('/update/:id', UserController.update)
router.delete('/:id', UserController.destroy)

module.exports = router