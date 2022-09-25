const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const validator = require('validator')
const bcrypt = require("bcrypt")
const MY_SECRET = process.env.JWT_SECRET

const createToken = (_id) => {
    return jwt.sign({ _id }, MY_SECRET, { expiresIn: '3d' })
}

const validateSignUpCredentials = async (email, password) => {
    let error = ''
    const exists = await User.findOne({ email }) ? true : false
    if (!email || !password) {
        error = 'Please fill in an email and a password'
    } else if (!validator.isEmail(email)) {
        error = 'Please enter a valid Email Addresss'
    }
    else if (password && !validator.isStrongPassword(password)) {
        error = 'Please enter a strong password'
    }
    else if (exists) {
        error = 'User already exists with that email'
    }
    else {
        error = ''
    }
    return error
}

const validateLoginCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    let error = ''
    if (!email || !password) {
        error = 'Please fill in an email and a password'
    }else if (!user) {
        error = 'User not found with that email'
    } else if (user) {
        const match = await bcrypt.compare(password, user.password)
        if(!match){
            error = 'Please provide a correct password'
        }
    }
    return error
}
//login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    const error = await validateLoginCredentials(email, password)
    if (error) {
        res.status(400).json({ error })
        console.log("error:", error)
    } else {
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
}
//signup
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    const error = await validateSignUpCredentials(email, password)
    if (error){
        res.status(400).json({ error })
    } else {
        const user = User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
}

module.exports = {
    loginUser,
    signupUser
}
