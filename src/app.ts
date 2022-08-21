import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app: Express = express()

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
});

app.get('/intro', (req: Request, res: Response) => {
    res.send('introduction')
});

app.listen(port, () => {
    console.log('port', port)
})

