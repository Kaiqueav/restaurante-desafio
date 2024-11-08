import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { product } from '@prisma/client';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService ){}
    @Post()
    async create(@Body() productDto:ProductDto):Pormise<product>{
        return this.productService.create(productDto)
    }


}
