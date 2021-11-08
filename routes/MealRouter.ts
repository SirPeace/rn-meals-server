import { Router } from "express"

import MealController from "../controllers/MealController"

const MealRouter = Router()
const Controller = new MealController()

MealRouter.get("/", Controller.index.bind(Controller))
MealRouter.post("/:meal/favorite", Controller.toggleFavorite.bind(Controller))

export default MealRouter
