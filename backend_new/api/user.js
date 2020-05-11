const bcrypt = require('bcrypt-nodejs')
const db = require('../config/db')
const validation = require('./validation')

const { existsOrError, notExistsOrError, equalsOrError } = validation

function encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports = {

    async save(req, res) {
        const user = { ...req.body }
        if (req.params.id)
            user.id = req.params.id

        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, "Nome não informado!")
            existsOrError(user.email, "Email não informado!")
            existsOrError(user.password, "Senha não informada!")
            existsOrError(user.confirmPassword, "Senha de Confirmação não informada!")
            equalsOrError(user.password, user.confirmPassword, "Senhas não conferem!")

            const userFromDB = await db('users')
                .where({ email: user.email }).first()

            if (!user.id)
                notExistsOrError(userFromDB, "Usuário já foi cadastrado!")

        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id)
            db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => { res.status(204).send() })
                .catch(err => res.status(500).send(err))
        else
            db('users')
                .insert(user)
                .then(_ => { res.status(204).send() })
                .catch(err => res.status(500).send(err))
    },

    get(req, res) {
        db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => { res.json(users) })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .first()
            .then(user => { res.json(user) })
            .catch(err => res.status(500).send(err))
    }

}