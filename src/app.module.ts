import * as path from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { AuthModule } from './auth';
import { UserModule } from './user';
import { DocumentModule } from './document';
import { DirectoryModule } from './directory';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.load(path.resolve(__dirname, 'config', '*.{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),

    DirectoryModule,
    DocumentModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
