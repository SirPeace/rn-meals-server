import { Router } from "express"

import CategoryRouter from "./CategoryRouter"
import FilterRouter from "./FilterRouter"
import MealRouter from "./MealRouter"

const RootRouter = Router()
RootRouter.use("/categories", CategoryRouter)
RootRouter.use("/filters", FilterRouter)
RootRouter.use("/meals", MealRouter)

RootRouter.get("/", async (_, res) => res.send({ data: "Hello World!" }))

export default RootRouter
