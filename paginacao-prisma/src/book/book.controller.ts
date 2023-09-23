import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dtos/book.dto';
import { DataPageDTO } from './dtos/dataPage.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll(@Body() data: DataPageDTO) {
    return await this.bookService.findAll(data);
  }
}
