import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm"

import Category from "./Category"
import Filter from "./Filter"

@Entity()
export default class Meal {
    @PrimaryGeneratedColumn()
    id?: number

    @ManyToMany(type => Category, category => category.meals, {
        cascade: ["update"],
        eager: true,
    })
    @JoinTable()
    categories!: Category[]

    @ManyToMany(type => Filter, filter => filter.meals, {
        cascade: ["update"],
        eager: true,
    })
    @JoinTable()
    filters!: Filter[]

    @Column()
    title!: string

    @Column()
    affordability!: "affordable" | "pricey" | "luxurious"

    @Column()
    complexity!: "simple" | "challenging" | "hard"

    @Column()
    imageUrl!: string

    @Column()
    duration!: number

    @Column({ type: "jsonb" })
    ingredients!: string[]

    @Column({ type: "jsonb" })
    steps!: string[]

    @Column({ default: false })
    isFavorite?: boolean
}
