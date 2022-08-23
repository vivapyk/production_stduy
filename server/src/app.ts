import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config();

const app: Express = express()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
    origin: allowedOrigins
}

app.use(cors(options))
app.use(bodyParser.json());

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
});

app.get('/intro', (req: Request, res: Response) => {
    console.log('hi')
    res.send({ intro: 'introduction' })
});

app.post('/retrospect', (req: Request, res: Response) => {
    console.log(req.body)
    res.send({ retrospect: 'retrospect' })
});

app.listen(port, () => {
    console.log('port', port)
})

