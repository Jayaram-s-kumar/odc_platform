const express = require('express')
const {hotelPrivate, hotel_register, hotel_login, hotel_profile, hotel_jobs}=require("../controllers/hotelController")
const router= express.Router()
const authenticateHotel = require('../middlewares/authenticateHotel')
// hotel reg
router.get('/private', authenticateHotel,hotelPrivate)
router.post("/register",hotel_register)
router.post('/login',hotel_login)
// jobs of hotel
router.get('/jobs',authenticateHotel,hotel_jobs)
router.get('/profile',authenticateHotel,hotel_profile)

module.exports = router