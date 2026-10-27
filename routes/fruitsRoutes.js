const express = require('express')
const router = express.Router()
const fruits = require('../controllers/fruitsControllers')

router.get('/', fruits.index)
router.get('/:name', fruits.show)
router.post('/', fruits.create)
// it updates just certain parts of the fruits class, not the whole class
router.patch('/:name', fruits.update)
router.delete('/:name', fruits.destroy)


module.exports = router