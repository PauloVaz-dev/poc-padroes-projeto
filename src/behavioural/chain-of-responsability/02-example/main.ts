import express, { Router, Request, Response, json } from 'express'
import { ValidateWebhook } from "./validateWebhook";

const validateWebhook = new ValidateWebhook()

const app = express()
const route = Router()
app.use(express.json())

route.post('/', async (req: Request, res: Response) => {
    const data = validateWebhook.Handle(req)
    console.log(data)

    res.send({
        message: 'ok'
    })
})

app.use(route)

app.listen(33333, () => 'server running on port 33333')