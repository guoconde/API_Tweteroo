import express, { json } from "express";
import cors from 'cors';

const app = express()

app.use(cors())
app.use(json())

let user

const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
]

app.get('/tweets', (_, res) => {
    res.send(tweets)
})

app.post('/sign-up', (req, res) => {
    user = req.body

    res.send('ok')
})

app.post('/tweets', (req, res) => {
    const tweet = req.body
    tweet.avatar = user.avatar

    if(tweets.length === 10) {
        tweets.shift()
    }

    tweets.push(tweet)

    res.send('ok')
})

app.listen(5000)
