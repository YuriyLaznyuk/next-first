import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule} from '@nestjs/config';
require('dotenv').config();

const DB: string = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(DB),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
