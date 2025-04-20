import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot(
      {
        isGlobal: true
      }
    ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get<string>('DB_HOST'),
        port: ConfigService.get<number>('DB_PORT'),
        password: ConfigService.get<string>('DB_PASS'),
        username: ConfigService.get<string>('DB_USER'),
        entities: [User],
        database: ConfigService.get<string>('DB_NAME'),
        synchronize: true,
        logging: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
