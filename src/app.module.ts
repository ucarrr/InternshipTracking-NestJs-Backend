import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqModule } from './faq/faq.module';
import { StepModule } from './steps/step.module'; 
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
//'mongodb://localhost/internShipApp'
//'mongodb+srv://cseIntern:akdenizece.maho1234@cluster0.wakjnte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
@Module({
  imports: [  MongooseModule.forRoot('mongodb+srv://cseIntern:akdenizece.maho1234@cluster0.wakjnte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  ConfigModule.forRoot({
    isGlobal:true
  }),
    AuthModule,
    UserModule,
    FaqModule,
    StepModule, 
    AuthModule,
  
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
