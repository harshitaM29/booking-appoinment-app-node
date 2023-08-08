const express = require('express');

const router = express.Router();

const userController = require('../controllers/user')
router.get('/user',userController.getUserInfo);

router.post('/user', userController.postUserInfo);

router.delete('/user/:id',userController.deleteUserInfo);

module.exports = router;