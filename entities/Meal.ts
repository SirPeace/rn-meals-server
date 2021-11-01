import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { define } from "typeorm-seeding"
import Faker from "faker"

import Category from "./Category"
import Filter from "./Filter"

@Entity()
export default class Meal {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany(() => Category)
    @JoinTable()
    categories!: Category[]

    @ManyToMany(() => Filter)
    @JoinTable()
    filters!: Filter[]

    @Column()
    title!: string

    @Column()
    affordability!: string

    @Column()
    complexity!: string

    @Column()
    imageUrl!: string

    @Column()
    duration!: number

    @Column({ type: "text" })
    ingredients!: string // JSON

    @Column({ type: "text" })
    steps!: string // JSON
}

define(Meal, (faker: typeof Faker) => {
    const meal = new Meal()

    meal.title = faker.lorem.words(2)
    meal.affordability = faker.lorem.words(2)
    meal.complexity = faker.lorem.words(2)
    meal.imageUrl = faker.image.imageUrl()
    meal.ingredients = JSON.stringify(
        new Array(5).fill(0).map(() => faker.lorem.words(2))
    )
    meal.steps = JSON.stringify(
        new Array(10).fill(0).map(() => faker.lorem.sentence())
    )

    return meal
})
