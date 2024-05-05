import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/users.schema';
import { Token, TokenSchema } from './schemas';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Token.name,
        schema: TokenSchema,
      },
    ]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET_KEY,
        signOption: {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
