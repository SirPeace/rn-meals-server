import { Router } from "express"

import FilterController from "../controllers/FilterController"

const FilterRouter = Router()
const Controller = new FilterController()

FilterRouter.get("/", Controller.index.bind(Controller))

export default FilterRouter
