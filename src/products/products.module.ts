import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product, ProductImage } from './entities';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([Product, ProductImage]),
    CommonModule,
  ],
  exports: [ProductsService],
})
export class ProductsModule { }
