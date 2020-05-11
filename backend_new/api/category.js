const bcrypt = require('bcrypt-nodejs')
const db = require('../config/db')
const validation = require('./validation')

const { existsOrError, notExistsOrError, equalsOrError } = validation

function withPath(categories) {
    const getParent = (categories, parentId) => {
        const parent = categories.filter(parent => parent.id === parentId)
        return parent.length ? parent[0] : null
    }

    const categoriesWithPath = categories.map(category => {
        let path = category.name
        let parent = getParent(categories, category.parentId)

        while (parent) {
            path = `${parent.name} > ${path}`
            parent = getParent(categories, parent.parentId)
        }

        return { ...category, path }
    })

    categoriesWithPath.sort((a, b) => {
        if (a.path < b.path) return -1
        if (a.path > b.path) return 1
        return 0
    })

    return categoriesWithPath
}

function toTree(categories, tree) {
    if (!tree)
        tree = categories.filter(c => !c.parentId)

    tree = tree.map(parentNode => {
        const isChild = node => node.parentId == parentNode.id
        parentNode.children = toTree(categories, categories.filter(isChild))
        return parentNode
    })
    return tree
}

module.exports = {

    async save(req, res) {
        const category = {
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        }

        if (req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, "Nome não informado!")
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (category.id)
            db('categories')
                .update(category)
                .where({ id: category.id })
                .then(_ => { res.status(204).send() })
                .catch(err => res.status(500).send(err))
        else
            db('categories')
                .insert(category)
                .then(_ => { res.status(204).send() })
                .catch(err => res.status(500).send(err))
    },

    async remove(req, res) {
        try {
            existsOrError(req.params.id, "Id não informado!")

            const subCategory = await db('categories')
                .where({ parentId: req.params.id })
            notExistsOrError(subCategory, "Categoria possui Subcategoria associada!")

            const articles = await db('articles')
                .where({ category: req.params.id })
            notExistsOrError(articles, "Categoria possui Artigos associada!")

            const rowsDeleted = await db('categories')
                .where({ id: req.params.id })
                .del()
            existsOrError(rowsDeleted, "Categoria não foi deletada!")

            res.status(204).send()
        } catch (msg) {
            return res.status(400).send(msg)
        }
    },

    get(req, res) {
        db('categories')
            .then(categories => { res.json(withPath(categories)) })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        db('categories')
            .where({ id: req.params.id })
            .first()
            .then(category => { res.json(category) })
            .catch(err => res.status(500).send(err))
    },

    getTree(req, res) {
        db('categories')
            .then(categories => res.json(toTree(withPath(categories))))
            .catch(err => res.status(500).send(err))
    }

}