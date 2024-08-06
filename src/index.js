import express, { json } from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(json())

app.get('/', (req, res) => {
    res.json({ message: 'Pagina principal' })
})


app.post('/login', (req, res) => {

    jwt.sign(req.body, 'secretkey', { expiresIn: '1m' }, (err, token) => {
        res.json({ token: `${token}` })
    })
})

app.get('/verify', verifyToken, (req, res) => {


    jwt.verify(req.token, 'secretkey', (err, decoded) => {
        if (err) { res.status(401).json({ error: `${err}` }) }
        else {
            res.status(200).json({ message: 'Token Valido', decoded })
        }
    })

})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1]

        req.token = bearerToken;
        next()
    } else {
        res.status(401).json({ message: 'Acceso denegado' })
    }
}

app.listen(3000, () => { console.log('Servidor levantado en http://localhost:3000') })