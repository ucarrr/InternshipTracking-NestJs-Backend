import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Token, TokenDocument, TokenSchema } from '../schemas';
//import { Model, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { IJwtPayload } from '../interfaces/IJwtPayload.interface';

/* interface IJwtPayload {
  userId: string;
}
 */

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectModel(Token.name) private readonly tokenModel: mongoose.Model<TokenDocument>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: IJwtPayload): Promise<Token> {
    console.log('Payload: ', payload);

    const userId = new mongoose.Types.ObjectId(payload.userId);

    console.log('UserId: ', userId);
    console.log(typeof userId);

    const token = await this.tokenModel
      .findOne({ userId })
      .select('-_id userId');

    console.log('Token: ', token);

    if (!token) throw new UnauthorizedException();

    return token;
  }
}
