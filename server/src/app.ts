import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app: Express = express()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
    origin: allowedOrigins
}


app.use(cors(options))


const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
});

app.get('/intro', (req: Request, res: Response) => {
    res.send({ intro: 'introduction' })
});

app.listen(port, () => {
    console.log('port', port)
})

