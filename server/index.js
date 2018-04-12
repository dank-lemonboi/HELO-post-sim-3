require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      sessions = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      cors = require('cors'),
      checkForSession = require('./middlewares/checkForSession'),
      roboHash = require('./middlewares/roboHash')
      ctrl = require('./controllers/userInfoController')

      const {
          SERVER_PORT,
          SESSION_SECRET,
          CONNECTION_STRING,
          DOMAIN,
          CLIENT_ID,
          CLIENT_SECRET,
          CALLBACK_URL,
          REACT_APP_SUCCESS,
          REACT_APP_FAILURE
      } = process.env

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))


app.use(passport.initialize())
app.use(passport.session())


passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    
    const db = app.get('db')
    const userData = profile._json
    let num = roboHash();
    userData.picture = `https://robohash.org/${num}.png`;
    

  db.find_user([ profile.user_id ]).then( user => {
   if (!user[0]) {
       db.create_user([userData.family_name, userData.given_name, userData.picture, profile.id]).then( user => {
        return done( null, user[0].user_id );
} ) } else {
        return done( null, user[0].user_id );
          }
        })
    }
))

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: REACT_APP_SUCCESS,
    failureRedirect: REACT_APP_FAILURE
})
)

passport.serializeUser( (user_id, done) => {
  return done(null, user_id);
});

passport.deserializeUser( (user_id, done) => {
  const db = app.get("db")
    db.find_session_user([user_id]).then(user => {
      return done(null, user[0]);
    });
});

app.get('/auth/me', (req, res) => {
    if(req.user) {
        res.status(200).send(req.user)
    } else {
        res.status(401).send('Nice try... Login Homie.')
    }
})

app.put('/api/user', ctrl.update)
// app.get('/api/getusers', ctrl.getUsers)

app.get('/api/logout', (req, res) => {
    req.logOut()
    res.redirect(`https://${DOMAIN}/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000&client_id=${CLIENT_ID}`);
})

massive(CONNECTION_STRING).then( db => {
    app.set( 'db', db )
    app.listen(SERVER_PORT, () => console.log(`Server making magic on port ${SERVER_PORT}`))
})
