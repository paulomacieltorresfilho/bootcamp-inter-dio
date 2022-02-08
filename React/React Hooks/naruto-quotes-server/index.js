import { getRandomQuote } from './randomQuote.js';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res) => {
    res.status(200).send(getRandomQuote());
})

app.listen(
    PORT,
    () => console.log('listening')
)