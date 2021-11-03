import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm"

import Meal from "./Meal"

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    id?: number

    @ManyToMany(() => Meal)
    meals?: Meal[]

    @Column()
    title!: string

    @Column()
    color!: string
}
