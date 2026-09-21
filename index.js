const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const userRoute = require('./routes/userRoute')
const connectDB = require('./utils/db')

const server = express()
server.use(cors())
server.use(bodyparser.json())

server.get('/', (req, res) => res.send('API is running'))
server.use('/user', userRoute)
connectDB()

const PORT = process.env.PORT || 5050
server.listen(PORT, () => {
    console.log('server started listening on port ' + PORT)
})