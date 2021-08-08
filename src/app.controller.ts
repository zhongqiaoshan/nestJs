import { Controller, Get,Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get("news")
  // getNews():string{
  //   return this.appService.getNews();
  // }

  @Get('admin')
  @Render('admin/index.ejs')
  getHello(){
    return {'name':"张三","age":"20"}
  }
}
