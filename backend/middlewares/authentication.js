const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const Student = require('../models/studentModel')

const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers
    if (!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }
    const token = authorization.split(' ')[1]
    try{
        const test = jwt.verify(token, JWT_SECRET);
       const {_id} = jwt.verify(token, JWT_SECRET);
       req.student = await Student.findOne({_id}).select('_id')
    }catch(error){
        console.log(error)
        return res.status(401).json({error: 'Request is not authorized'})
    }
    next()
}
module.exports = requireAuth