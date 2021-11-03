import { Request, Response } from "express"
import { getRepository } from "typeorm"

import Filter from "../entities/Filter"

class FilterController {
    public async index(req: Request, res: Response): Promise<Response> {
        return res.send({
            data: await getRepository(Filter).find(),
        })
    }
}

export default FilterController
