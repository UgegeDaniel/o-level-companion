const express = require('express')
const {loginStudent, signupStudent, updateStudentHistory, getStudentHistory} = require('../controllers/studentController')
const router = express.Router()
//login route
router.post('/login', loginStudent)
//signup route
router.post('/signup', signupStudent)
router.post('/history', getStudentHistory)
router.post('/updateHistory', updateStudentHistory)
module.exports = router