if(Process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const DARKSKY_API_KEY = porocess.env.DARKSKY_API_KEY
const express = require('express')
const app = express()

app.use(express.json())