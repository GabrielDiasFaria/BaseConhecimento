module.exports = middleware => {
    return (req, res, next) => {
        // if (!req.user.admin || req.user.admin == undefined)
        // res.status(401).send('Usuário não é administrador')
        // else
        middleware(req, res, next)
    }
}