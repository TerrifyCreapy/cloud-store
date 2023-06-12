import { UserEntity } from './user/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1',
  database: 'cloud-store',
  entities: [UserEntity, FileEntity],
  synchronize: true,
  autoLoadEntities: true,
};
export default config;
