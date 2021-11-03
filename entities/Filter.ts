import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm"

import Meal from "./Meal"

@Entity()
export default class Filter {
    @PrimaryGeneratedColumn()
    id?: number

    @ManyToMany(() => Meal)
    meals?: Meal[]

    @Column()
    title!: string
}
