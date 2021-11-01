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
export default class Filter {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany(() => Meal)
    @JoinTable()
    meals!: number

    @Column()
    title!: string
}

define(Filter, (faker: typeof Faker) => {
    const filter = new Filter()

    filter.title = faker.lorem.words(2)

    return filter
})
