import { Router } from "express"
import CategoryRouter from "./CategoryRouter"

const routes = Router()
routes.use("/categories", CategoryRouter)

routes.get("/", (_, res) => res.send({ data: "Hello world!" }))

export default routes
