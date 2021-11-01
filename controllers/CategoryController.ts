import { Request, Response } from "express"
import { getRepository } from "typeorm"

import Category from "../entities/Category"

class CategoryController {
    public async index(req: Request, res: Response): Promise<Response> {
        const categoryRepository = getRepository(Category)

        const categories = await categoryRepository.find()

        return res.send({
            data: categories,
        })
    }

    public async store(req: Request, res: Response): Promise<Response> {
        if (!this.validateStoreRequest(req)) return res.send({ status: "fail" })

        const categoryRepository = getRepository(Category)

        const category = new Category()
        category.color = req.body.color
        category.title = req.body.title
        const newCategory = await categoryRepository.save(category)

        return res.send({
            status: "success",
            data: newCategory,
        })
    }

    private validateStoreRequest(req: Request): boolean {
        if (!req.body.title || typeof req.body.title !== "string") return false
        if (!req.body.color || typeof req.body.color !== "string") return false

        return true
    }
}

export default CategoryController
