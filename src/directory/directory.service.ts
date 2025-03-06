import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DirectoryEntity as Directory, DirectoryEntity } from "./../entities";;
import { DirectoryModel } from '../models';

@Injectable()
export class DirectoryService {
  constructor(
    @InjectRepository(DirectoryEntity)
    private readonly directoryRepository: Repository<DirectoryEntity>,
  ) {}

  async findAll(): Promise<DirectoryEntity[]> {
    return this.directoryRepository.find();
  }

  async findById(id: number): Promise<DirectoryEntity | null> {
    return this.directoryRepository.findOne({ where: { id } });
  }

  async create(createDto: DirectoryModel): Promise<DirectoryEntity> {
    const directory = this.directoryRepository.create({ ...createDto});
    return this.directoryRepository.save(directory);
  }

  async update(id: number, updateDto: DirectoryModel): Promise<DirectoryEntity> {
    await this.directoryRepository.update(id, updateDto);
    return this.findById(id);
  }

//   async delete(id: number): Promise<void> {
//     await this.documentRepository.delete(id);
//   }

}
