import express, { type Express, type Request, type Response } from 'express'

const app: Express = express();
const port = 3000;

// GET method route
app.get('/', (req: Request, res: Response) => {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/', (req: Request, res: Response) => {
    res.send('POST method to the homepage');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});