import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect, Req, Res
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

//express
// app.get('/',(req,res)=>{
//   res.status(201).send('poka')
// })


@Controller('products')
export class ProductsController {

constructor(private readonly productsService:ProductsService){

//injecting into the constructor "ProductsService"


}


  @Get()
  // @Redirect('https://wwwww.com.ua',301)


  getAll():Promise<Product[]> {

    return this.productsService.getAll()
  }


  // getAll(@Req() request: Request, @Res() response: Response) {
  //   response.status(201).end('poka');
  // }


  @Get(':id')

  // getOne(@Param() params){
  // return 'getOne '+ params.id
  // }

  getOne(@Param('id')id: string):Promise<Product> {
    // return 'getOne ' + id;
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control', '500%')
  create(@Body() createProduct: CreateProductDto):Promise<Product> {

    // return `Title: ${createProduct.title} Price: ${createProduct.price}`;
    return this.productsService.create(createProduct);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<Product> {
    return this.productsService.remove(id);

  }

  @Put(':id')
  update(@Body() updateProduct: UpdateProductDto
    , @Param('id') id: string):Promise<Product> {
    return this.productsService.update(id,updateProduct);
  }


}
