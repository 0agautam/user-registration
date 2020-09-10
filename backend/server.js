const express       = require('express')
const cors          = require('cors')
const mongoose      = require('mongoose')

const userRoute = require('./routes/user.route')


require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5005

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true})

const connection = mongoose.connection

connection.on('error', (err) => {
    console.log("Error:" + err)
})
connection.once('open', () => {
    console.log("MongoDb Connection Established Successfully")
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})

app.use('/register', userRoute)