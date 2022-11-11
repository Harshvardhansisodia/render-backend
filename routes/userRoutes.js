const express = require('express');
const router = express.Router();
const userCntrl = require('../controller/userCntrl')
const auth = require('../middleware/auth')

router.post('/register', userCntrl.registerUser)

router.post('/login', userCntrl.loginUser)

router.get('/verify', userCntrl.verifiedToken)

router.get('/usertoken', auth, (req, res)=>{
    console.log(req.user)
})


module.exports = router;

