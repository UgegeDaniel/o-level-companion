const jwt = require('jsonwebtoken')
const Student = require('../models/studentModel')
const validator = require('validator')
const bcrypt = require("bcrypt")
const MY_SECRET = process.env.JWT_SECRET

const createToken = (_id) => {
    return jwt.sign({ _id }, MY_SECRET, { expiresIn: '3d' })
}

const validateSignUpCredentials = async (email, password, userName) => {
    let error = ''
    const exists = await Student.findOne({ email }) ? true : false
    if (!email || !password || !userName) {
        error = 'Please fill in a valid email, userName and a password'
    } else if (!validator.isEmail(email)) {
        error = 'Please enter a valid Email Addresss'
    }
    else if (password && !validator.isStrongPassword(password)) {
        error = 'Please enter a strong password'
    }
    else if (exists) {
        error = 'Student already exists with that email'
    }
    else {
        error = ''
    }
    return error
}

const validateLoginCredentials = async (email, password) => {
    const student = await Student.findOne({ email })
    let error = ''
    if (!email || !password) {
        error = 'Please fill in an email and a password'
    }else if (!student) {
        error = 'Student not found with that email'
    } else if (student) {
        const match = await bcrypt.compare(password, student.password)
        if(!match){
            error = 'Please provide a correct password'
        }
    }
    return error
}
//login
const loginStudent= async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email })
    const error = await validateLoginCredentials(email, password)
    if (error) {
        res.status(400).json({ error })
        console.log("error:", error)
    } else {
        const token = createToken(student._id)
        const {userName} = student
        res.status(200).json({ email, token, userName })
    }
}
//signup
const signupStudent = async (req, res) => {
    const { email, password, userName } = req.body;
    const error = await validateSignUpCredentials(email, password, userName)
    if (error){
        res.status(400).json({ error })
    } else {
        const student = Student.signup(email, password, userName)
        const token = createToken(student._id)
        res.status(200).json({ email, token, userName})
        console.log(userName)
    }
}

const getStudentHistory = async (req, res) => {
	const {email} = req.body;
try{
const student = await await Student.findOne({ email });
const studentHistory = student.history
res.status(200).json({studentHistory})
}catch(error){
res.status(500).json({error})
}
}

const updateStudentHistory = async (req, res) => {
	const {email, newData} = req.body;
try{
const student = await Student.findOne({ email });
student.history.push(newData)
const newHistory = student.history
res.status(201).json({newHistory})
}catch(error){
res.status(500).json({error})
}
}
module.exports = {
    loginStudent,
    signupStudent,
getStudentHistory,
updateStudentHistory
}
