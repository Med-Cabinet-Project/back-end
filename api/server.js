const express = require('express')
const cors = require("cors")

const authenticate = require('./auth/authenticate-middleware')
const authRouter = require('./auth/authRouter')

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)

server.get('/', (req, res) => res.status(200).json({ message: 'API is online'}));

module.exports = server;