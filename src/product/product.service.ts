import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.module';
import { ProductDto } from './product.dto';
@Injectable()
export class ProductService {
    constructor ( private prisma: PrismaService){}

    async create(productDto: ProductDto){
        return  this.prisma.product.create({
            data: productDto,
        });
    }


}
