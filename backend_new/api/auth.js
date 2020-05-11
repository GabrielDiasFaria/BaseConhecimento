const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const db = require('../config/db')

module.exports = {

    async signin(req, res) {
        if (!req.body.email || !req.body.password)
            return res.status(400).send('Informe usuário e senha!')

        const user = await db('users')
            .where({ email: req.body.email })
            .first()
            .catch(err => res.status(500).send(err))

        if (!user)
            return res.status(400).send('Usunário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password.toString(), user.password.toString())
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3) // 3 Diass
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    },

    async validateToken(req, res) {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                console.log(token)
                if (new Date(token.exp * 1000) > new Date())
                    return res.send(true)
            }
        } catch (e) {
            // Problema no Token
        }

        res.send(false)
    }
}
