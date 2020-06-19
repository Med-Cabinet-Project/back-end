const express = require('express')

const authRouter = require('./auth/authRouter')

const server = express();

server.use('/api/auth', authRouter)

server.get('/', (req, res) => res.status(200).json({ message: 'API is online'}));

module.exports = server;