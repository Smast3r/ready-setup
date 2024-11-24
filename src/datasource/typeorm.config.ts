import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from '../entities';

config({ path: 'src/.env' });

export const typeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: () => ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    // username: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    migrationsRun: true,
    entities: Entities,
    autoLoadEntities: true,
    synchronize: false,
  }),
});

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  //   username: process.env.POSTGRES_USER,
  //   password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  entities: Entities,
  synchronize: false,
});
