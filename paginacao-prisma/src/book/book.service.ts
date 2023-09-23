import { Injectable } from '@nestjs/common';
import { BookDTO } from './dtos/book.dto';
import { PrismaService } from 'src/database/PrismaService';
import { DataPageDTO } from './dtos/dataPage.dto';
import { calculatePages } from './helpers/calculatePages';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDTO) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });
    if (bookExists) {
      throw new Error('Book is already exists!');
    }
    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }

  async findAll(data: DataPageDTO) {
    const { URL_SERVER } = process.env;
    // pageRequest vira como query params
    const { amoutDataRequest, pageRequest: page } = await data;

    const countData = await this.prisma.book.count();
    const pages = calculatePages(countData, amoutDataRequest);

    if (page > pages) throw new Error('Page already exists');

    const books = await this.prisma.book.findMany({
      skip: page >= pages ? 0 : page * amoutDataRequest,
      take: amoutDataRequest,
    });
    const response = {
      info: {
        count: countData,
        pages,
        next: page >= pages ? null : `${URL_SERVER}/?page=${page + 1}`,
        prev: page <= 1 ? null : `${URL_SERVER}/?page=${page - 1}`,
      },
      data: books,
    };
    console.log(response);
    return response;
  }
}
