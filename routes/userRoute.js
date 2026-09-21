const express=require('express')
const userController=require('../controllers/userController')
const router=express.Router()
router.post('/add-user',userController.createUser)

router.get('/get',userController.getUsers)

router.delete('/del/:id',userController.deleteUser)

router.put('/update/:id',userController.updateUser)


router.get('/get-user/:id',userController.getsingleUser)

module.exports=router