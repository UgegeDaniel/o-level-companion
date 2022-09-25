const express = require('express')
const {loginStudent, signupStudent} = require('../controllers/studentController')
const router = express.Router()
//login route
router.post('/login', loginStudent)
//signup route
router.post('/signup', signupStudent)
module.exports = router