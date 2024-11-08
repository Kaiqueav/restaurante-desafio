import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  constructor() {
    super();
  }

  // Conecta ao banco de dados quando o módulo é inicializado
  async onModuleInit() {
    await this.$connect();
  }

  // Desconecta do banco de dados quando o módulo é destruído
  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Método auxiliar para limpar dados do banco de dados (para testes, por exemplo)
  async cleanDatabase() {
    await this.$transaction([
      this.order.deleteMany(),
      this.product.deleteMany(),
    ]);
  }
}