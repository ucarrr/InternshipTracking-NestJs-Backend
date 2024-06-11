import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LinkDocument = HydratedDocument<Link>;

@Schema()
export class Link {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  sequence: number;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
