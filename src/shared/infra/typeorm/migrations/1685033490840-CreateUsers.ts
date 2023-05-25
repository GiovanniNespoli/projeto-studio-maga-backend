import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1685033490840 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
              { name: 'name', type: 'varchar(20)' },
              { name: 'email', type: 'varchar(150)', isUnique: true },
              { name: 'password', type: 'varchar(80)' },
              { name: 'phone', type: 'varchar(80)' },
              { name: 'adress', type: 'varchar(200)' },
              { name: 'avatar', type: 'varchar(200)', isNullable: true },
              { name: 'user_type', type: 'uuid' },
              { name: 'created_at', type: 'timestamp', default: 'now()' },
              { name: 'updated_at', type: 'timestamp', default: 'now()' },
            ]
            // foreignKeys: [
            //   {
            //     name: 'UserTeam',
            //     referencedTableName: 'teams',
            //     referencedColumnNames: ['id'],
            //     columnNames: ['team_id'],
            //     onDelete: 'CASCADE',
            //     onUpdate: 'CASCADE',
            //   },
            // ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
      }

}
