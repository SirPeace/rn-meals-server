import { Request, Response } from "express"
import { getRepository } from "typeorm"

import Meal from "../entities/Meal"

class MealController {
    public async index(req: Request, res: Response) {
        return res.send({
            data: await getRepository(Meal).find(),
        })
    }

    public async toggleFavorite(req: Request, res: Response) {
        const mealRepository = getRepository(Meal)
        const meal = await mealRepository.findOne(req.params.meal)

        if (meal) {
            meal.isFavorite = !meal.isFavorite
            await mealRepository.save(meal)
        }

        return res.status(204).send()
    }
}

export default MealController
