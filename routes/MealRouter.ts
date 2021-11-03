import { Router } from "express"

import MealController from "../controllers/MealController"

const MealRouter = Router()
const Controller = new MealController()

MealRouter.get("/", Controller.index.bind(Controller))

export default MealRouter
