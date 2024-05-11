import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { Document, Types, SchemaTypes, HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Faq } from '../../faq/schemas/faq.schema';
import { Step } from '../../steps/schemas/steps.schema';

//export type UserDocument = User & Document;
export type UserDocument = mongoose.HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  fullName: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  steps:[Step]

  // Faq şemasına referans
  //@Prop({ type: [{ type: SchemaTypes.ObjectId, ref: Faq.name }] })
  //userFavoriteFaqs: Types.ObjectId[];
  @Prop({ type: [{ type: mongoose.SchemaTypes.ObjectId, ref: Faq.name }] })
  userFavoriteFaqs: mongoose.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
