import { Exclude } from "class-transformer";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm"

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    phone: string;

    @Column()
    adress: string;

    @Column()
    user_type: string;

    // @ManyToOne(() => UserType, user_type => user_type.id)
    // @JoinColumn({ name: 'user_type_id' })
    // user_type: UserType;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // @Expose({ name: 'avatar_url' })
    // getAvatarUrl(): string | null {
    //     if (!this.avatar) {
    //         return null;
    //     }

    //     switch (uploadConfig.driver) {
    //         case 'disk':
    //             return `${process.env.APP_WEB_API}/files/${this.avatar}`;

    //         case 's3':
    //             return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;

    //         default:
    //             return null;
    //     }
    // }
}

export default User;
