import { Router } from  'express'
import controller from '../controllers/user.js'

const router = Router()

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.put('/:id', controller.delete)
router.post('/login', controller.login)

export default router