import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';

@Controller('artice')
export class ArticeController {

    @Get()
    index() {
        return "我是一个文章首页";
    }

    //通过Query装饰器获取get传值
    @Get('add')
    addArtice(@Query() query) {
        console.log(query)
        return "增加页面";
    }

    //通过Request装饰器获取get传值
    @Get('edit')
    editArtice(@Request() req) {
        console.log(req)
        return "修改页面";
    }

    @Post('create')
    create(@Body() data) {
        console.log(data)
        return '我是post方法';
    }

    //获取动态路由
    @Get(":id")
    indexId(@Param() param){
        console.log(param)
        return "这是获取动态路由"

    }

}
