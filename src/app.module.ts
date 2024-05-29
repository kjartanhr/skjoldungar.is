import { Module } from '@nestjs/common';
import { PagesController } from './app.controller';

@Module({
    imports: [],
    controllers: [PagesController],
    providers: [],
})
export class AppModule { }
