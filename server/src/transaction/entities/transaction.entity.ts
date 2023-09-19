import { Category } from 'src/category/entities/category.entity'
import { User } from 'src/user/entities/user.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Transaction {
	@PrimaryGeneratedColumn({ name: 'transation_id' })
	id: number

	@Column()
	title: string

	@Column({ nullable: true })
	type: string

	@Column()
	amount: number

	@ManyToOne(() => Category, (category) => category.transaction, {
		onDelete: 'SET NULL',
	})
	@JoinColumn({ name: 'category_id' })
	category: Category

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@ManyToOne(() => User, (user) => user.transcation)
	@JoinColumn({ name: 'user_id' })
	user: User
}
