import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    fullName: string;

    @Column('boolean', { default: true })
    isActive: boolean;

    @Column('text', { array: true, default: ['user'] })
    roles: string[];

    @BeforeInsert()
    @BeforeUpdate()
    checkBeforeAction() {
        this.email = this.email.toLowerCase().trim();
    }
}
