const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../model/userModel')
const tokenGenerate = require('../utilities/generateToken')

const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({ name, email, password: hashPassword, role })
        const saved = await newUser.save()
        const token = tokenGenerate(newUser._id)
        res.status(201).json({ message: "User registered succesfully", saved, token })
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }
        const existUser = await userModel.findOne({ email })
        if (!existUser) {
            return res.status(400).json({ error: "No user found" })
        }
        const comparePass = await bcrypt.compare(password, existUser.password)
        if (!comparePass) {
            return res.status(400).json({ error: "Wrong password" })
        }
        const token = tokenGenerate(existUser._id)
        res.status(200).json({ message: "User login succesfull" , data: existUser,token })

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}

module.exports = {
    register,
    login
}