import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentEntity as Document, DocumentEntity } from "./../entities";;
import { DocumentModel } from '../models';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(DocumentEntity)
    private readonly documentRepository: Repository<DocumentEntity>,
  ) {}

  async findAll(): Promise<DocumentEntity[]> {
    return this.documentRepository.find();
  }

  async findById(id: number): Promise<DocumentEntity | null> {
    return this.documentRepository.findOne({ where: { id } });
  }

  async create(createDto: DocumentModel): Promise<DocumentEntity> {
    const document = this.documentRepository.create({ ...createDto});
    return this.documentRepository.save(document);
  }

  async update(id: number, updateDto: DocumentModel): Promise<DocumentEntity> {
    await this.documentRepository.update(id, updateDto);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.documentRepository.delete(id);
  }

}
