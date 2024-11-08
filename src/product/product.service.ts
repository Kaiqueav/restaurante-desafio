import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.module';
import { ProductDto } from './product.dto';
import { product } from '@prisma/client';
@Injectable()
export class ProductService {
    constructor ( private prisma: PrismaService){}

    async create(productDto: ProductDto){
        if (!productDto.name || !productDto.description || !productDto.price || !productDto.type) {
            throw new HttpException('All fields are required', HttpStatus.BAD_REQUEST);
          }
      
          // Verifica se o preço é um número válido
          if (isNaN(productDto.price) || productDto.price <= 0) {
            throw new HttpException('Price must be a positive number', HttpStatus.BAD_REQUEST);
          }
         try{ 
            return await this.prisma.product.create({
            data:{
                ...productDto,
                price: Number(productDto.price)
                },
            });
          }catch(error){
            throw new HttpException(
                'Failed to create product: ' + error.message,
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
          }
          
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
