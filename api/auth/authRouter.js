const bcrypt = require('bcryptjs');
const express = require('express');


const router = express.Router();

// Register
router.post('/register', (req, res) => {
    const userAccount = req.body;
})

// Login
router.post('/login', (req, res) => {

})

module.exports = router;