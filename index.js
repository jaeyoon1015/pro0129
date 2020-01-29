import http from 'http'
import express from 'express'
import ip from 'ip'
import cors from 'cors'
const app = express()

app.use(cors())

const dbTest = require('./crudDB/dbTest.js')

const myIP = ip.address()
const port = 9023

// Server Open
app.listen(port, myIP, () => {
    console.log(`Server Open ${myIP}:${port}`)
})

app.get('/', (req, res) => {
    res.end('hello server')
})

// Routing to other page
app.post('/db', dbTest)