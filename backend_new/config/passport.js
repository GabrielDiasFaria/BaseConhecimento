const { authSecret } = require('../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt
const db = require('../config/db')

const params = {
    secretOrKey: authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, (payload, done) => {
    db('users')
        .where({ id: payload.id })
        .first()
        .then(user => done(null, user ? { ...payload } : false))
        .catch(err => done(err, false))
})

passport.use(strategy)

module.exports = {
    authenticate: () => passport.authenticate('jwt', { session: false })
}