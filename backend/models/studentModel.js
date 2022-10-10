const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema
const studentSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
history: []
}
)

//Static Sign up method 
studentSchema.statics.signup = async function (email, password, userName) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const student = await this.create({ email, password: hash, userName })
    return student
}
module.exports = mongoose.model('Student', studentSchema)