import express, { json } from "express";
import cors from 'cors';

const app = express()

app.use(cors())
app.use(json())

let user

app.get('/', (_, res) => {
    res.send('rodou')
})

app.post('/sign-up', (req, res) => {
    user = req.body
    console.log(user)

    res.send('ok')
})

app.listen(5000)
