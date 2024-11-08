import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.module';
import { ProductDto } from './product.dto';
import { product } from '@prisma/client';
@Injectable()
export class ProductService {
    constructor ( private prisma: PrismaService){}

    async create(productDto: ProductDto){
        return  this.prisma.product.create({
            data: productDto,
        });
    }

    async findAll(): Promise<product[]>{
        return this.prisma.product.findMany();
    }
    async findBy(id:number): Promise<product>{
        return this.prisma.product.findUnique({
            where:{id},
        });
    }
    async update(id: number, productDto:ProductDto): Promise<product>{
        return this.prisma.product.update({
            where:{id},
            data:{
                name: productDto.name|| undefined,
                description: productDto.description|| undefined,
                price: productDto.price|| undefined,
                type: productDto.type||undefined,
            },
        });
    }
    async remove(id: number): Promise<product> {
        return this.prisma.product.delete({
          where: { id },
        });
      }


}
