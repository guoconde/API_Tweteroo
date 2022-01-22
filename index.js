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
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "gustavo",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
]

app.post('/sign-up', (req, res) => {
    user = req.body

    if (user.avatar === '' || user.username === '') {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        res.status(201).send('ok')
    }

})

app.post('/tweets', (req, res) => {
    const tweet = req.body
    const header = req.headers
    
    tweet.avatar = user.avatar
    tweet.username = header.user
    
    if(tweet.username === '' || tweet.tweet === '') {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        tweets.unshift(tweet)
        res.status(201).send('ok')
    }

    
})

app.get('/tweets', (req, res) => {
    const page = req.query.page
    
    if(page < 1) {
        res.sendStatus(400);
    }

    const startIndex = (page - 1) * 10
    const endIndex = page * 10

    const resultTweets = tweets.slice(startIndex, endIndex)

    res.send(resultTweets)
})

app.get('/tweets/:username', (req, res) => {

    const name = req.params.username

    const tweetsFiltered = tweets.filter(t => t.username === name)

    res.send(tweetsFiltered)
})

app.listen(5000)
