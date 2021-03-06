import { Router } from "express"

import CategoryController from "../controllers/CategoryController"

const CategoryRouter = Router()
const Controller = new CategoryController()

CategoryRouter.get("/", Controller.index.bind(Controller))

export default CategoryRouter
