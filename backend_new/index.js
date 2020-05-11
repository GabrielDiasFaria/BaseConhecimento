const express = require('express')
const db = require('./config/db')
const routes = require('./config/routes')
const cors = require('cors')

const app = express()
let port = 21262

const corsOptions = {
    // origin: 'http://descomplicandolinguagens.com.br',
    exposedHeaders: 'x-total-count'
};
app.use(cors(corsOptions))


app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`>>> Backend iniciado na porta ${port}`)
})

// npm start