const express = require('express')
const routes = express.Router()

const admin = require('./admin')

const Users = require('../api/user')
const Categories = require('../api/category')
const Articles = require('../api/article')
const Auth = require('../api/auth')

routes.get('/', (req, res) => {
    return res.json({
        author: "Gabriel Dias Faria",
        description: "API para Blog!"
    })
})

// Auth
routes.post('/signup', Users.save)
routes.post('/signin', Auth.signin)
routes.post('/validateToken', Auth.validateToken)

// Users
// .all(app.config.passport.authenticate())
routes.get('/users', Users.get)
routes.post('/users', admin(Users.save))
routes.get('/users/:id', Users.getById)
routes.put('/users/:id', admin(Users.save))

// Categories
routes.get('/categories/tree', admin(Categories.getTree))
routes.get('/categories', Categories.get)
routes.post('/categories', admin(Categories.save))
routes.get('/categories/:id', Categories.getById)
routes.put('/categories/:id', admin(Categories.save))
routes.delete('/categories/:id', admin(Categories.remove))

// Articles
routes.get('/articles', Articles.get)
routes.post('/articles', admin(Articles.save))
routes.get('/articles/:id', Articles.getById)
routes.put('/articles/:id', admin(Articles.save))
routes.delete('/articles/:id', admin(Articles.remove))
routes.get('/categories/:id/articles', Articles.getByCategory)

module.exports = routes