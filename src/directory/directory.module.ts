import { Module } from '@nestjs/common';
import { DirectoryEntity } from './../entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectoryController } from './directory.controller';
import { DirectoryService } from './directory.service';
import { ConfigModule } from 'nestjs-config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([DirectoryEntity])],
  controllers: [DirectoryController],
  providers: [DirectoryService],
  exports: [DirectoryService],
})
export class DirectoryModule {}
