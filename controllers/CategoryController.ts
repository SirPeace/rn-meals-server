import { Request, Response } from "express"
import { getRepository } from "typeorm"

import Category from "../entities/Category"

class CategoryController {
    public async index(req: Request, res: Response) {
        return res.send({
            data: await getRepository(Category).find(),
        })
    }
}

export default CategoryController
