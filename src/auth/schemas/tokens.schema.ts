import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import *as mongoose from 'mongoose';
import { User } from 'src/users/schemas/users.schema'; 

export type TokenDocument = mongoose.HydratedDocument<Token>

@Schema({ timestamps: true })
export class Token { 

  @Prop({ type: mongoose.Types.ObjectId ,ref: User.name})
  userId: User;

  @Prop({ required: true })
  token: string;
  
}

export const TokenSchema = SchemaFactory.createForClass(Token);
