import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqModule } from './faq/faq.module';
import { StepModule } from './steps/step.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UserModule,FaqModule,StepModule, MongooseModule.forRoot('mongodb://localhost/internShipApp')],
  controllers: [],
  providers: [AppService, AuthService],
})
export class AppModule {}
