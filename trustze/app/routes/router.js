const express=require('express');
const router=express.Router();
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/controller');
//sign up api'
router.post('/signup',controller.signUp);

module.exports=router;


