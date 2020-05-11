const queries = require('./query')
const db = require('../config/db')
const validation = require('./validation')

const { existsOrError, notExistsOrError, equalsOrError } = validation
const limit = 5 // Usado para Paginação

module.exports = {

    save(req, res) {
        const article = { ...req.body }

        if (req.params.id) article.id = req.params.id

        try {
            existsOrError(article.name, "Nome não informado!")
            existsOrError(article.description, "Descrição não informada!")
            existsOrError(article.category, "Categoria não informado!")
            existsOrError(article.author, "Autor não informado!")
            existsOrError(article.html, "Html não informado!")
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (article.id)
            db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => { res.status(204).send() })
                .catch(err => res.status(500).send(err))
        else
            db('articles')
                .insert(article)
                .then(_ => { res.status(204).send() })
                .catch(err => res.status(500).send(err))
    },

    async remove(req, res) {
        try {
            const rowsDeleted = await db('articles')
                .where({ id: req.params.id })
                .del()
            existsOrError(rowsDeleted, "Artigo não foi deletado!")

            res.status(204).send()
        } catch (msg) {
            return res.status(400).send(msg)
        }
    },

    async get(req, res) {
        const page = req.query.page || 1
        const result = await db('articles').count('id').first()
        const count = parseInt(result['count(`id`)'])

        db({ a: 'articles', u: 'users', c: 'categories' })
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' }, { category: 'c.name' })
            .whereRaw('?? = ??', ['u.id', 'a.author'])
            .whereRaw('?? = ??', ['c.id', 'a.category'])
            .orderBy('a.id', 'desc')
            .limit(limit)
            .offset(page * limit - limit)
            .then(articles => {
                res.json({
                    data: articles,
                    count,
                    limit
                })
            })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        db({ a: 'articles', u: 'users', c: 'categories' })
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', 'a.bannerUrl', 'a.html', { author: 'u.name' }, { category: 'c.name' })
            .where({ 'a.id': req.params.id })
            .whereRaw('?? = ??', ['u.id', 'a.author'])
            .whereRaw('?? = ??', ['c.id', 'a.category'])
            .first()
            .then(article => {
                article.html = article.html.toString()
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    },

    async getByCategory(req, res) {
        const categoryId = req.params.id
        const page = req.query.page || 1
        const categories = await db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories[0].map(c => c.id)

        db({ a: 'articles', u: 'users' })
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .limit(limit)
            .offset(page * limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.author'])
            .whereIn('category', ids)
            .orderBy('a.id', 'desc')
            .then(article => res.json(article))
            .catch(err => res.status(500).send(err))
    }
}