import { Connection } from "typeorm"
import { Factory, Seeder } from "typeorm-seeding"

import Filter from "../../entities/Filter"

export default class FilterSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const filters: Filter[] = [
            { title: "Gluten Free" },
            { title: "Vegan" },
            { title: "Vegetarian" },
            { title: "Lactose Free" },
        ]

        const filterRepository = connection.getRepository(Filter)

        await Promise.all(
            filters.map(filterAttributes =>
                filterRepository.save(filterAttributes)
            )
        )
    }
}
