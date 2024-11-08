import { ProdutoTipo } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto{
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsEnum(ProdutoTipo)
    type: ProdutoTipo;
  
    @IsNumber()
    price: number;
}