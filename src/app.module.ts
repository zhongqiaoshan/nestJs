import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticeController } from './artice/artice.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticeController, UserController],
  providers: [AppService],
})
export class AppModule {}
