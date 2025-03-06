import { Module } from '@nestjs/common';
import { DocumentEntity } from './../entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { ConfigModule } from 'nestjs-config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([DocumentEntity])],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports: [DocumentService],
})
export class DocumentModule {}
