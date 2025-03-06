import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    UseGuards,
    Request,
    NotFoundException,
    ForbiddenException,
  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'roles.decorator';
import { RolesGuard } from 'roles.guard';
import { DirectoryService } from './directory.service';
import { DirectoryEntity as Directory, DirectoryEntity } from './../entities';
import { DirectoryModel } from '../models';

  @Controller('directories')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  export class DirectoryController {
    constructor(private readonly directoryService: DirectoryService) {}
  
    /** 📌 Get all directories (Admin & Viewer) */
    @Get()
    @Roles('admin', 'editor','viewer')
    async getAllDirectories(): Promise<DirectoryEntity[]> {
      return this.directoryService.findAll();
    }
  
    /** 📌 Get a directory by ID (Admin & Viewer) */
    @Get(':id')
    @Roles('admin', 'editor','viewer')
    async getDirectoryById(@Param('id') id: number): Promise<DirectoryEntity> {
      const directory = await this.directoryService.findById(id);
      if (!directory) {
        throw new NotFoundException('Directory not found');
      }
      return directory;
    }
  
    /** 📌 Create a new directory (Admin & Editor) */
    @Post()
    @Roles('admin', 'editor','viewer')
    async createDirectory(@Body() createDto: DirectoryModel, @Request() req): Promise<DirectoryEntity> {
      return this.directoryService.create(createDto);
    }
  
    /** 📌 Update a directory (Admin & Editor, only if owner) */
    @Put(':id')
    @Roles('admin', 'editor','viewer')
    async updateDirectory(
      @Param('id') id: number,
      @Body() updateDto: DirectoryModel,
      @Request() req
    ): Promise<DirectoryEntity> {
      const directory = await this.directoryService.findById(id);
      if (!directory) throw new NotFoundException('Directory not found');  
      return this.directoryService.update(id, updateDto);
    }
  
    // /** 📌 Delete a directory (Admin only) */
    // @Delete(':id')
    // @Roles('admin')
    // async deleteDirectory(@Param('id') id: number): Promise<void> {
    //   return this.directoryService.delete(id);
    // }
  }
  