import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNews():string {
    return "大家好，这是nest的自定义方法"
  }

}
