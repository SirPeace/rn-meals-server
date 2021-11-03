import { Connection } from "typeorm"
import { Factory, Seeder } from "typeorm-seeding"

import Category from "../../entities/Category"

export default class CategorySeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const categories: Category[] = [
            { title: "Italian", color: "#f5428d" },
            { title: "Quick & Easy", color: "#f54242" },
            { title: "Hamburgers", color: "#f5a442" },
            { title: "German", color: "#f5d142" },
            { title: "Light & Lovely", color: "#368dff" },
            { title: "Exotic", color: "#41d95d" },
            { title: "Breakfast", color: "#9eecff" },
            { title: "Asian", color: "#b9ffb0" },
            { title: "French", color: "#ffc7ff" },
            { title: "Summer", color: "#47fced" },
        ]

        const categoryRepository = connection.getRepository(Category)

        await Promise.all(
            categories.map(categoryAttributes =>
                categoryRepository.save(categoryAttributes)
            )
        )
    }
}
