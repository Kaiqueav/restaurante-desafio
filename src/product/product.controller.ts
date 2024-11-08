import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { product } from '@prisma/client';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService ){}
    @Post()
    async create(@Body() productDto:ProductDto):Promise<product>{
        return this.productService.create(productDto)
    }
    @Get()
    async  findAll():Promise<product[]>{
        return this.productService.findAll();
    }
    @Get(':id')
    async finBy(@Param('id')id:number):Promise<product>{
        return this.productService.findBy(id);
    }

}
