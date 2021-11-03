import { Request, Response } from "express"
import { getRepository } from "typeorm"

import Meal from "../entities/Meal"

class MealController {
    public async index(req: Request, res: Response): Promise<Response> {
        return res.send({
            data: await getRepository(Meal).find(),
        })
    }
}

export default MealController
