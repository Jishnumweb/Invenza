const jwt = require('jsonwebtoken')

const tokenGenerate = (id)=>{
     const token = jwt.sign({id},process.env.SECRETE_KEY)
     return token
}

module.exports = tokenGenerate