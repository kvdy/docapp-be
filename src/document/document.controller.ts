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
  import { DocumentService } from './document.service';
  import { DocumentEntity as Document, DocumentEntity } from './../entities';
  import { DocumentModel } from '../models';
  
  @Controller('documents')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}
  
    /** 📌 Get all documents (Admin & Viewer) */
    @Get()
    @Roles('admin', 'editor','viewer')
    async getAllDocuments(): Promise<DocumentEntity[]> {
      return this.documentService.findAll();
    }
  
    /** 📌 Get a document by ID (Admin & Viewer) */
    @Get(':id')
    @Roles('admin', 'editor','viewer')
    async getDocumentById(@Param('id') id: number): Promise<DocumentEntity> {
      const document = await this.documentService.findById(id);
      if (!document) {
        throw new NotFoundException('Document not found');
      }
      return document;
    }
  
    /** 📌 Create a new document (Admin & Editor) */
    @Post()
    @Roles('admin', 'editor','viewer')
    async createDocument(@Body() createDto: DocumentModel, @Request() req): Promise<DocumentEntity> {
      return this.documentService.create(createDto);
    }
  
    /** 📌 Update a document (Admin & Editor, only if owner) */
    @Put(':id')
    @Roles('admin', 'editor','viewer')
    async updateDocument(
      @Param('id') id: number,
      @Body() updateDto: DocumentModel,
      @Request() req
    ): Promise<DocumentEntity> {
      const document = await this.documentService.findById(id);
      if (!document) throw new NotFoundException('Document not found');
  
      if (req.user.role !== 'admin' && document.ownerid !== req.user.id) {
        throw new ForbiddenException('You can only update your own documents');
      }
  
      return this.documentService.update(id, updateDto);
    }
  
    /** 📌 Delete a document (Admin only) */
    @Delete(':id')
    @Roles('admin')
    async deleteDocument(@Param('id') id: number): Promise<void> {
      return this.documentService.delete(id);
    }
  }
  