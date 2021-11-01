import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { define } from "typeorm-seeding"
import Faker from "faker"

import Meal from "./Meal"

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany(() => Meal)
    @JoinTable()
    meals!: number

    @Column()
    title!: string

    @Column()
    color!: string
}

define(Category, (faker: typeof Faker) => {
    const category = new Category()

    category.title = faker.lorem.words(2)
    category.color = faker.internet.color()

    return category
})
