import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqModule } from './faq/faq.module';
import { StepModule } from './steps/step.module';

@Module({
  imports: [UserModule,FaqModule,StepModule, MongooseModule.forRoot('mongodb://localhost/internShipApp')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
