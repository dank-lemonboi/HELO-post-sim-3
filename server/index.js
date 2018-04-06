require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      sessions = require('express-session'),
      passport = require('passport'),
      auth0Strategy = require('passport-auth0'),
      cors = require('cors')

      const {
          SERVER_PORT,
          SESSION_SECRET
      } = process.env

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 234000
    }
}))

app.listen(SERVER_PORT, () => console.log(`Server making magic on port ${SERVER_PORT}`))