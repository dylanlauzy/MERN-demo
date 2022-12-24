const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(async(req, res, next) => {
  let token

  // make sure there's a token that is a bearer token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Veryify token s
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token ('-password' excldues the password)
      req.user = await User.findById(decoded.id).select('-password')

      // call next piece of middleware
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if(!token) {
    res.status(401)
    throw new Error('Not authroized, no token')
  }
})

module.exports = { protect }