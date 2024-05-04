import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTypes } from 'mongoose';
import { Faq } from '../../faq/schemas/faq.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    fullName: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    // Faq şemasına referans
    @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: Faq.name }] })
    userFavoriteFaqs: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
