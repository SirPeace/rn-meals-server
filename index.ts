import express from "express"
import { createConnection } from "typeorm"

import routes from "./routes"

createConnection().then(connection => {
    const app = express()
    app.use(express.json())
    app.use(routes)

    const port = process.env["PORT"] || 3000
    app.listen(port, () => console.log(`Listening on port ${port}...`))
})
