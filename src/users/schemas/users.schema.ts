import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
//JSON Structure
@Schema()
export class User {
    @Prop()
    fullName: string;
  
    @Prop()
    email: string;
  
    @Prop()
    password: string;
  
    @Prop([String])
    userFavoriteFaqs: string[];
  
    @Prop()
    stepsId: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
